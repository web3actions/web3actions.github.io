<script setup>
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
  <div class="bg-gray-50">
    <div class="container mx-auto px-5 min-h-screen flex flex-col">
      <div class="flex-grow flex flex-col justify-center">
        <div class="bg-indigo-50 p-1 rounded-xl mb-28 mx-auto space-x-2">
          <button class="bg-indigo-600 text-white rounded-xl px-3 py-2 font-bold">send-tx</button>
          <button class="hover:bg-indigo-100 text-indigo-600 rounded-xl px-3 py-2 font-bold">get-tx</button>
          <button class="hover:bg-indigo-100 text-indigo-600 rounded-xl px-3 py-2 font-bold">price-feeds</button>
          <button class="hover:bg-indigo-100 text-indigo-600 rounded-xl px-3 py-2 font-bold">get-config</button>
          <button class="hover:bg-indigo-100 text-indigo-600 rounded-xl px-3 py-2 font-bold">oracle</button>
          <button class="hover:bg-indigo-100 text-indigo-600 rounded-xl px-3 py-2 font-bold">signer</button>
        </div>
        <div class="grid grid-cols-12 gap-16">
          <div class="col-span-5">
            <h1 class="text-indigo-500 text-3xl font-brand font-extralight mb-5">The Actions</h1>
            <h2 class="text-gray-900 text-6xl font-brand font-extrabold">
              Send Transaction
            </h2>
            <p class="leading-8 text-gray-500 text-2xl mt-5">
              Send a Web3 transaction to a configured RPC node to make contract calls and send ETH.
            </p>
            <div class="mt-10 text-center">
              <a href="#" class="border border-gray-300 text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
                <i class="fab fa-github" /> Go to repository
              </a>
            </div>
          </div>
          <div class="col-span-7">
            <div class="bg-white rounded-3xl p-8 border shadow-inner relative">
              <button class="text-indigo-600 text-xl absolute top-5 right-5">
                <i class="far fa-copy" />
              </button>
              <pre v-html="actionExample"></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
