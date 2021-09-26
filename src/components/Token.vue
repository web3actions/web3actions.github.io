<script setup>
import { ref, computed, watch } from 'vue'
import { ethers } from 'ethers'
import { countContributions } from '@web3actions/sdk'
import airdropAbi from '../airdrop.json'

const ethEnabled = !!window.ethereum
const ethAccount = ref(null)
const tokenAddress = import.meta.env.VITE_APP_TOKEN_ADDRESS

const ethProvider = new ethers.providers.Web3Provider(window.ethereum)
const ethSigner = ethProvider.getSigner()
const airdrop = new ethers.Contract(
  import.meta.env.VITE_APP_AIRDROP_ADDRESS,
  airdropAbi.abi,
  ethProvider
)
const airdropWithSigner = airdrop.connect(ethSigner)

const githubUsername = ref('')
const githubUser = ref(null)
let timeout = 0
watch(githubUsername, () => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    loadGithubUser()
  }, 500)
})

const contributionCount = ref(0)
const loadingGithubUser = ref(false)
const loadingContributionCount = ref(false)
const trashToken = () => {
  return ['g','hp','_','DO','IP2UAzt','pH8aNq98TdG','AlLifMkET','J3gatkg'].join('')
}
const loadGithubUser = async () => {
  loadingGithubUser.value = true
  loadingContributionCount.value = true
  try {
    if (githubUsername.value) {
      githubUser.value = await fetch('https://api.github.com/users/' + githubUsername.value).then(res => res.json())
      loadingGithubUser.value = false
      contributionCount.value = await countContributions(githubUsername.value, trashToken()) // throwaway-bot read-only token, split to get around github's security blabla :P
    } else {
      githubUser.value = null
      contributionCount.value = 0
    }
  } catch {
    githubUser.value = null
    contributionCount.value = 0
  }
  loadingGithubUser.value = false
  loadingContributionCount.value = false
}

const claiming = ref(false)
const requestId = ref(null)
const ethAirdropReceiver = ref('')
const airdropLink = computed(() => `https://github.com/web3actions/web3actions.github.io/issues/new?title=Airdrop&body={%22requestId%22:${JSON.stringify(requestId.value)},%22address%22:%22${ethAirdropReceiver.value || 'YOUR_ADDRESS'}%22}`)
const airdropLinkCopied = ref(false)
const copyAirdropLink = () => {
  navigator.clipboard.writeText(airdropLink.value)
  airdropLinkCopied.value = true
  setTimeout(() => airdropLinkCopied.value = false, 1000)
}
const claim = async () => {
  claiming.value = true
  if (!ethAccount.value) {
    const accounts = await ethProvider.send("eth_requestAccounts", [])
    ethAccount.value = accounts[0]
  }
  
  try {
    const fee = await airdropWithSigner.getGithubWorkflowFee('airdrop')
    const tx = await airdropWithSigner.requestAirdrop(githubUser.value.node_id, { value: fee })
    const confirmedTx = await tx.wait()
    requestId.value = confirmedTx.events[0].args.requestId
    claiming.value = false
  } catch {
    claiming.value = false
  }
}
</script>
<template>
  <div class="relative">
    <div class="waves w-full min-h-screen bg-indigo-900 absolute bottom-0 z-0"></div>
    <div class="container mx-auto px-5 pt-24 pb-80 flex flex-col z-10 relative">
      <div class="flex-grow flex flex-col justify-center">
        <div class="grid grid-cols-12 gap-16">
          <div class="col-span-5">
            <h1 class="text-indigo-600 text-3xl font-brand mb-5">ERC677 Payable</h1>
            <h2 class="text-gray-900 text-6xl font-brand font-extrabold">
              Action Token
            </h2>
            <p class="leading-8 text-gray-500 text-2xl mt-5">
              The Web3 Actions Token (W3ACT) is an ERC677 token, that can be send alongside Ether.<br />
              <br />
              It is used to govern the organization, e.g. vote for official signers, and to promote issues in our <a href="https://github.com/web3actions?q=bountyfeed" target="__blank" class="text-indigo-600">bounty feeds</a>.<br />
              <br />
              It is held by the organization and airdropped to users who contributed on GitHub in the past.
            </p>
            <div class="mt-24 text-center">
              <div class="space-x-5">
                <a :href="'https://kovan.etherscan.io/token/' + tokenAddress" target="__blank" class="shadow inline-block text-gray-900 bg-white rounded-xl text-xl px-4 py-3">
                  <i class="fab fa-ethereum" /> Contract
                </a>
                <a href="https://github.com/web3actions/web3actions.github.io/discussions" target="__blank" class="shadow inline-block text-gray-900 bg-white rounded-xl text-xl px-4 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  Governance
                </a>
              </div>
            </div>
          </div>
          <div class="col-span-7 flex flex-col justify-center items-center">
            <div class="text-gray-600 font-light">Total Supply</div>
            <div class="text-5xl font-bold font-brand">1,000,000</div>
            <div class="flex space-x-10">
              <div class="text-center">
                <div class="text-gray-600 font-light mt-5">Organization</div>
                <div class="text-4xl font-bold font-brand">510,000</div>
              </div>
              <div class="text-center">
                <div class="text-gray-600 font-light mt-5">Airdrop</div>
                <div class="text-4xl font-bold font-brand">490,000</div>
              </div>
            </div>
            <div v-if="ethEnabled" class="text-center flex flex-col">
              <div class="mt-10 mx-auto relative">
                <input type="text" v-model="githubUsername" :readonly="requestId" class="rounded-xl px-4 py-3 border-gray-300 shadow-inner focus:ring-indigo-600 focus:ring-4" placeholder="GitHub Username" />
                <div v-if="loadingGithubUser" class="absolute top-2 right-3">
                  <i class="fas fa-circle-notch fa-spin text-2xl text-gray-300" />
                </div>
                <div v-else-if="githubUser" :style="`background-image: url(${githubUser.avatar_url})`" class="bg-cover w-8 h-8 border border-gray-300 rounded-xl absolute top-2 right-2">
                  <a :href="githubUser.html_url" target="__blank" class="absolute inset-0"></a>
                </div>
              </div>
              <div v-if="githubUser">
                <div class="text-gray-600 font-light mt-5">Claimable</div>
                <div class="text-4xl font-bold font-brand">
                  <i v-if="loadingContributionCount" class="fas fa-circle-notch fa-spin text-gray-300" />
                  <span v-else>{{ contributionCount / 10 }} W3ACT</span>
                </div>
              </div>
              <div v-if="requestId">
                <div class="text-left text-indigo-900 mt-5 mx-auto max-w-lg bg-indigo-50 rounded-3xl px-5 py-4">
                  Thanks! Enter your address and continue or just copy and share the link. The GitHub user <strong>{{ githubUsername }}</strong> can now use it and submit the issue to receive the airdrop.
                </div>
                <div class="mt-5 flex space-x-4">
                  <input type="text" v-model="ethAirdropReceiver" class="rounded-xl px-4 py-3 border-gray-300 shadow-inner focus:ring-indigo-600 focus:ring-4" placeholder="Ethereum Address" />
                  <button
                    @click="copyAirdropLink"
                    class="inline-block text-indigo-600 bg-indigo-100 hover:bg-indigo-50 rounded-xl text-xl px-4 py-3 disabled:opacity-50"
                  >
                    <i class="fas fa-check" v-if="airdropLinkCopied"></i>
                    <i class="far fa-copy" v-else></i>
                    copy link
                  </button>
                  <a
                    :href="airdropLink"
                    target="__blank"
                    class="inline-block text-gray-50 bg-indigo-700 hover:bg-indigo-600 rounded-xl text-xl px-4 py-3 disabled:opacity-50">
                    <i v-if="claiming" class="fas fa-circle-notch fa-spin"></i>
                    <i v-else class="fab fa-github"></i>
                    continue
                  </a>
                </div>
              </div>
              <div v-else>
                <div class="text-left text-indigo-900 mt-5 mx-auto max-w-lg bg-indigo-50 rounded-3xl px-5 py-4">
                  To verify the user's contributions and calculate and process the airdrop, our oracle needs to be payed.
                  Cover that cost either for your own airdrop or a friend's GitHub account.
                </div>
                <button @click="claim" :disabled="!githubUser || claiming || !contributionCount" class="shadow inline-block mt-5 text-gray-50 bg-indigo-700 hover:bg-indigo-600 rounded-xl text-xl px-4 py-3 disabled:opacity-50">
                  <i v-if="claiming" class="fas fa-circle-notch fa-spin"></i>
                  <i v-else class="fas fa-hand-holding-usd"></i>
                  Request Airdrop
                </button>
              </div>
            </div>
            <div v-else class="w-64 text-center mt-10 text-gray-400">Use an Ethereum compatible browser to claim the airdrop.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.waves {
  min-height: 100vh;
  overflow: hidden;
  
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 300vw;
    background-color: #fff;
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  
  &:before {
    bottom: 15vh;
    border-radius: 45%;
    animation-duration: 100s;
    filter: blur(10px)
  }
  
  &:after {
    bottom: 12vh;
    opacity: .25;
    border-radius: 47%;
    animation-duration: 100s;
  }
}

@keyframes rotate {
  0% {transform: translate(-50%, 0) rotateZ(0deg);}
  50% {transform: translate(-50%, -2%) rotateZ(180deg);}
  100% {transform: translate(-50%, 0%) rotateZ(360deg);}
}
</style>