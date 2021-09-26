<script setup>
import { ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'
import exampleTx from './../examples/tx.yml?raw'
import examplePriceFeeds from './../examples/price-feeds.yml?raw'
import exampleSigner from './../examples/signer.yml?raw'

const showAction = ref('tx')
</script>

<template>
  <div class="z-10 relative bg-white bg-opacity-25">
    <div class="container mx-auto px-5 min-h-screen flex flex-col">
      <div class="bg-white bg-opacity-25 p-1 rounded-xl my-28 mx-auto space-x-2">
        <button @click="showAction = 'tx'" :class="['nav-item', { active: showAction === 'tx' }]">tx</button>
        <button @click="showAction = 'signer'" :class="['nav-item', { active: showAction === 'signer' }]">signer</button>
        <button @click="showAction = 'price-feeds'" :class="['nav-item', { active: showAction === 'price-feeds' }]">price-feeds</button>
      </div>
      <div class="grid grid-cols-12 gap-16">
        <div class="col-span-5">
          <h1 class="text-indigo-600 text-3xl font-brand mb-5 durat">The Building Blocks</h1>
          <div class="relative">
            <TransitionRoot
              appear
              :show="showAction === 'tx'"
              enter="transition-all transform duration-1000"
              enter-from="-translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="-translate-x-16 opacity-0"
              class="absolute"
            >
              <h2 class="text-gray-900 text-6xl font-brand font-extrabold">
                Transactions
              </h2>
              <p class="leading-8 text-gray-500 text-2xl mt-5">
                Make any kind of transaction as part of your automation workflows.<br>
                <br />
                Create simple bounties, scheduled payments or build complex contracting workflows and get each run verified by external signers.
              </p>
              <div class="mt-24 text-center">
                <a href="#" class="shadow text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
                  <i class="fab fa-github" /> Readme
                </a>
              </div>
            </TransitionRoot>
            <TransitionRoot
              appear
              :show="showAction === 'signer'"
              enter="transition-all transform duration-1000"
              enter-from="-translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="-translate-x-16 opacity-0"
              class="absolute"
            >
              <h2 class="text-gray-900 text-6xl font-brand font-extrabold">
                Workflow Signer
              </h2>
              <p class="leading-8 text-gray-500 text-2xl mt-5">
                Repositories can sign each others workflow runs.<br />
                <br />
                Based on the workflow's file hash, a contract can verify the signature,
                making the workflow the off-chain part of a hybrid smart contract.
              </p>
              <div class="mt-24 text-center">
                <a href="#" class="shadow text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
                  <i class="fab fa-github" /> Readme
                </a>
              </div>
            </TransitionRoot>
            <TransitionRoot
              appear
              :show="showAction === 'price-feeds'"
              enter="transition-all transform duration-1000"
              enter-from="-translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="-translate-x-16 opacity-0"
              class="absolute"
            >
              <h2 class="text-gray-900 text-6xl font-brand font-extrabold">
                Price Feeds
              </h2>
              <p class="leading-8 text-gray-500 text-2xl mt-5">
                Pull price information via Chainlink into your workflows.
              </p>
              <div class="mt-24 text-center">
                <a href="#" class="shadow text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
                  <i class="fab fa-github" /> Readme
                </a>
              </div>
            </TransitionRoot>
          </div>
        </div>
        <div class="col-span-7">
          <div class="relative">
            <TransitionRoot
              appear
              :show="showAction === 'tx'"
              enter="transition-all transform duration-1000"
              enter-from="translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="translate-x-16 opacity-0"
              class="absolute inset-0"
            >
              <div class="text-indigo-900 rounded-3xl p-8">
                <pre v-highlightjs="exampleTx"><code class="yaml bg-transparent p-0"></code></pre>
              </div>
            </TransitionRoot>
            <TransitionRoot
              appear
              :show="showAction === 'signer'"
              enter="transition-all transform duration-1000"
              enter-from="translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="translate-x-16 opacity-0"
              class="absolute inset-0"
            >
              <div class="text-indigo-900 rounded-3xl p-8">
                <pre v-highlightjs="exampleSigner"><code class="yaml bg-transparent p-0"></code></pre>
              </div>
            </TransitionRoot>
            <TransitionRoot
              appear
              :show="showAction === 'price-feeds'"
              enter="transition-all transform duration-1000"
              enter-from="translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="translate-x-16 opacity-0"
              class="absolute inset-0"
            >
              <div class="text-indigo-900 rounded-3xl p-8">
                <pre v-highlightjs="examplePriceFeeds"><code class="yaml bg-transparent p-0"></code></pre>
              </div>
            </TransitionRoot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
