<script setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

const showAction = ref('send-tx')

const actionExample = `<span class="font-bold">name</span>: Pay Contributor
<span class="font-bold">on</span>:
  <span class="font-bold">issues</span>:
    <span class="font-bold">types</span>: [ opened ]
<span class="font-bold">jobs</span>:
  <span class="font-bold">pay-contributor</span>:
    <span class="font-bold">name</span>: Pay Contributor
    <span class="font-bold">runs-on</span>: ubuntu-latest
    <span class="font-bold">if</span>: \${{ contains(github.event.issue.labels.*.name, 'payed') }}
    <span class="font-bold">steps</span>:
      <span class="font-bold">uses</span>: cryptoactions/send-tx@593fa08f4aaf9a4b206d3d7876cd6f8746093a4b
      <span class="font-bold">with</span>:
        <span class="font-bold">seed-phrase</span>: '...'
        <span class="font-bold">from</span>: 0x123
        <span class="font-bold">to</span>: 0x456
        <span class="font-bold">value</span>: '1000000000000000000'`
</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto px-5 min-h-screen flex flex-col">
      <div class="bg-indigo-50 p-1 rounded-xl my-28 mx-auto space-x-2">
        <button @click="showAction = 'send-tx'" :class="['nav-item', { active: showAction === 'send-tx' }]">send-tx</button>
        <button @click="showAction = 'get-tx'" :class="['nav-item', { active: showAction === 'get-tx' }]">get-tx</button>
        <button @click="showAction = 'price-feeds'" :class="['nav-item', { active: showAction === 'price-feeds' }]">price-feeds</button>
        <button @click="showAction = 'get-tx'" :class="['nav-item', { active: showAction === 'get-config' }]">get-config</button>
        <button @click="showAction = 'oracle'" :class="['nav-item', { active: showAction === 'oracle' }]">oracle</button>
        <button @click="showAction = 'signer'" :class="['nav-item', { active: showAction === 'signer' }]">signer</button>
      </div>
      <div class="grid grid-cols-12 gap-16">
        <div class="col-span-5">
          <h1 class="text-indigo-500 text-3xl font-brand font-extralight mb-5 durat">The Building Blocks</h1>
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
                Send ETH or tokens and make contract calls via a configured RPC node.
              </p>
              <div class="mt-10 text-center">
                <a href="#" class="border border-gray-300 text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
                  <i class="fab fa-github" /> Go to repository
                </a>
              </div>
            </TransitionRoot>
            <TransitionRoot
              appear
              :show="showAction === 'get-tx'"
              enter="transition-all transform duration-1000"
              enter-from="-translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="-translate-x-16 opacity-0"
              class="absolute"
            >
              <h2 class="text-gray-900 text-6xl font-brand font-extrabold">
                Get Transaction
              </h2>
              <p class="leading-8 text-gray-500 text-2xl mt-5">
                Fetch transaction information and process it in your workflow.
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
              class="absolute"
            >
              <div class="bg-indigo-50 text-indigo-900 rounded-3xl p-8 relative">
                <button class="text-indigo-600 text-xl absolute top-5 right-5">
                  <i class="far fa-copy" />
                </button>
                <pre v-html="actionExample"></pre>
              </div>
            </TransitionRoot>
            <TransitionRoot
              appear
              :show="showAction === 'get-tx'"
              enter="transition-all transform duration-1000"
              enter-from="translate-x-16 opacity-0"
              enter-to="translate-x-0 opacity-100"
              leave="transition-all transform duration-1000"
              leave-from="translate-x-0 opacity-100"
              leave-to="translate-x-16 opacity-0"
              class="absolute"
            >
              <div class="bg-indigo-50 text-indigo-900 rounded-3xl p-8 relative">
                <button class="text-indigo-600 text-xl absolute top-5 right-5">
                  <i class="far fa-copy" />
                </button>
                <pre v-html="actionExample"></pre>
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
              class="absolute"
            >
              <div class="bg-indigo-50 text-indigo-900 rounded-3xl p-8 relative">
                <button class="text-indigo-600 text-xl absolute top-5 right-5">
                  <i class="far fa-copy" />
                </button>
                <pre v-html="actionExample"></pre>
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
              class="absolute"
            >
              <div class="bg-indigo-50 text-indigo-900 rounded-3xl p-8 relative">
                <button class="text-indigo-600 text-xl absolute top-5 right-5">
                  <i class="far fa-copy" />
                </button>
                <pre v-html="actionExample"></pre>
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
              class="absolute"
            >
              <div class="bg-indigo-50 text-indigo-900 rounded-3xl p-8 relative">
                <button class="text-indigo-600 text-xl absolute top-5 right-5">
                  <i class="far fa-copy" />
                </button>
                <pre v-html="actionExample"></pre>
              </div>
            </TransitionRoot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
