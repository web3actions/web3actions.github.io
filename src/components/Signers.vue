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
        <div class="grid grid-cols-12 gap-16">
          <div class="col-span-5">
            <h1 class="text-indigo-500 text-3xl font-brand font-extralight mb-5">Signing GitHub Data</h1>
            <h2 class="text-gray-900 text-6xl font-brand font-extrabold">
              Query Signers
            </h2>
            <p class="leading-8 text-gray-500 text-2xl mt-5">
              An app that depends on GitHub can use a Crypto Actions Signer to verify data integrity on-chain with an independent party.
              Signers may charge fees for their signatures.
            </p>
            <div class="mt-10 text-center">
              <a href="#" class="border border-gray-300 text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
                <i class="fab fa-github" /> Go to repository
              </a>
            </div>
          </div>
          <div class="col-span-7 flex justify-center items-center">
            <div class="perspective space-y-5 w-96">
              <div class="bg-white rounded-xl px-6 py-4 shadow">
                <div class="text-indigo-600 font-extrabold font-brand">App</div>
                <div class="text-gray-500 text-sm">Sends queries to your contract and requests and receives signatures.</div>
              </div>
              <div class="bg-white text-indigo-600 rounded-xl px-6 py-4 shadow">
                <div class="text-indigo-600 font-extrabold font-brand">App Contract</div>
                <div class="text-gray-500 text-sm">
                  Stores request on signer contract, pays and returns request ID.
                </div>
              </div>
              <div class="bg-white text-indigo-600 rounded-xl px-6 py-4 shadow">
                <div class="text-indigo-600 font-extrabold font-brand">Signer Contract</div>
                <div class="text-gray-500 text-sm">
                  Stores and provides request information and verifies signatures.
                </div>
              </div>
              <div class="bg-white text-indigo-600 rounded-xl px-6 py-4 shadow">
                <div class="text-indigo-600 font-extrabold font-brand">Signer</div>
                <div class="text-gray-500 text-sm">
                  Fetches data, signs it and sends it back to the app.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>