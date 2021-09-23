<script setup>
import { ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'
import exampleSendTx from './../examples/send-tx.yml?raw'
import exampleGetConfig from './../examples/get-config.yml?raw'
import examplePriceFeeds from './../examples/price-feeds.yml?raw'
import exampleOracle from './../examples/oracle.yml?raw'
import exampleSigner from './../examples/signer.yml?raw'

const showAction = ref('send-tx')
</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto px-5 min-h-screen flex flex-col">
      <div class="bg-indigo-50 p-1 rounded-xl my-28 mx-auto space-x-2">
        <button @click="showAction = 'send-tx'" :class="['nav-item', { active: showAction === 'send-tx' }]">send-tx</button>
        <button @click="showAction = 'get-config'" :class="['nav-item', { active: showAction === 'get-config' }]">get-config</button>
        <button @click="showAction = 'price-feeds'" :class="['nav-item', { active: showAction === 'price-feeds' }]">price-feeds</button>
        <button @click="showAction = 'oracle'" :class="['nav-item', { active: showAction === 'oracle' }]">oracle</button>
        <button @click="showAction = 'signer'" :class="['nav-item', { active: showAction === 'signer' }]">signer</button>
        <button class="nav-item hover:bg-transparent cursor-default text-indigo-300" disabled>gas-station</button>
      </div>
      <div class="grid grid-cols-12 gap-16">
        <div class="col-span-5">
          <h1 class="text-indigo-600 text-3xl font-brand mb-5 durat">The Building Blocks</h1>
          <div class="relative">
            <TransitionRoot
              appear
              :show="showAction === 'send-tx'"
              enter="transition-all transform duration-1000"
              enter-from="-translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="-translate-x-16 opacity-0"
              class="absolute"
            >
              <h2 class="text-gray-900 text-6xl font-brand font-extrabold">
                Send Transaction
              </h2>
              <p class="leading-8 text-gray-500 text-2xl mt-5">
                Send ETH and read from or write to contracts.<br>
                <br />
                Incentivize contributions, airdrop tokens or build complex contracting workflows. This action makes it simple.
              </p>
              <div class="mt-10 text-center">
                <a href="#" class="border border-gray-300 text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
                  <i class="fab fa-github" /> Go to repository
                </a>
              </div>
            </TransitionRoot>
            <TransitionRoot
              appear
              :show="showAction === 'get-config'"
              enter="transition-all transform duration-1000"
              enter-from="-translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="-translate-x-16 opacity-0"
              class="absolute"
            >
              <h2 class="text-gray-900 text-6xl font-brand font-extrabold">
                Crypto Config
              </h2>
              <p class="leading-8 text-gray-500 text-2xl mt-5">
                Read from a repositories web3actions.json file or a "web3actions" section in the package.json.<br />
                <br />
                Users can have their config at username/username.
              </p>
              <div class="mt-10 text-center">
                <a href="#" class="border border-gray-300 text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
                  <i class="fab fa-github" /> Go to repository
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
              <div class="mt-10 text-center">
                <a href="#" class="border border-gray-300 text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
                  <i class="fab fa-github" /> Go to repository
                </a>
              </div>
            </TransitionRoot>
            <TransitionRoot
              appear
              :show="showAction === 'oracle'"
              enter="transition-all transform duration-1000"
              enter-from="-translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="-translate-x-16 opacity-0"
              class="absolute"
            >
              <h2 class="text-gray-900 text-6xl font-brand font-extrabold">
                Oracle
              </h2>
              <p class="leading-8 text-gray-500 text-2xl mt-5">
                Easily provide your smart contracts with data from GitHub in a reliable and effective way.<br />
              </p>
              <div class="mt-10 text-center">
                <a href="#" class="border border-gray-300 text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
                  <i class="fab fa-github" /> Go to repository
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
                Signer
              </h2>
              <p class="leading-8 text-gray-500 text-2xl mt-5">
                Earn fees for signing GitHub data for other apps.
              </p>
              <div class="mt-10 text-center">
                <a href="#" class="border border-gray-300 text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
                  <i class="fab fa-github" /> Go to repository
                </a>
              </div>
            </TransitionRoot>
          </div>
        </div>
        <div class="col-span-7">
          <div class="relative">
            <TransitionRoot
              appear
              :show="showAction === 'send-tx'"
              enter="transition-all transform duration-1000"
              enter-from="translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="translate-x-16 opacity-0"
              class="absolute inset-0"
            >
              <div class="bg-indigo-50 text-indigo-900 rounded-3xl p-8 relative">
                <button class="text-indigo-600 text-xl absolute top-5 right-5">
                  <i class="far fa-copy" />
                </button>
                <pre v-highlightjs="exampleSendTx"><code class="yaml bg-transparent p-0"></code></pre>
              </div>
            </TransitionRoot>
            <TransitionRoot
              appear
              :show="showAction === 'get-config'"
              enter="transition-all transform duration-1000"
              enter-from="translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="translate-x-16 opacity-0"
              class="absolute inset-0"
            >
              <div class="bg-indigo-50 text-indigo-900 rounded-3xl p-8 relative">
                <button class="text-indigo-600 text-xl absolute top-5 right-5">
                  <i class="far fa-copy" />
                </button>
                <pre v-highlightjs="exampleGetConfig"><code class="yaml bg-transparent p-0"></code></pre>
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
              <div class="bg-indigo-50 text-indigo-900 rounded-3xl p-8 relative">
                <button class="text-indigo-600 text-xl absolute top-5 right-5">
                  <i class="far fa-copy" />
                </button>
                <pre v-highlightjs="examplePriceFeeds"><code class="yaml bg-transparent p-0"></code></pre>
              </div>
            </TransitionRoot>
            <TransitionRoot
              appear
              :show="showAction === 'oracle'"
              enter="transition-all transform duration-1000"
              enter-from="translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="translate-x-16 opacity-0"
              class="absolute inset-0"
            >
              <div class="bg-indigo-50 text-indigo-900 rounded-3xl p-8 relative">
                <button class="text-indigo-600 text-xl absolute top-5 right-5">
                  <i class="far fa-copy" />
                </button>
                <pre v-highlightjs="exampleOracle"><code class="yaml bg-transparent p-0"></code></pre>
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
              <div class="bg-indigo-50 text-indigo-900 rounded-3xl p-8 relative">
                <button class="text-indigo-600 text-xl absolute top-5 right-5">
                  <i class="far fa-copy" />
                </button>
                <pre v-highlightjs="exampleSigner"><code class="yaml bg-transparent p-0"></code></pre>
              </div>
            </TransitionRoot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
