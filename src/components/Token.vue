<template>
  <div class="bg-gray-50">
    <div class="container mx-auto px-5 min-h-screen flex flex-col">
      <div class="flex-grow flex flex-col justify-center">
        <div class="grid grid-cols-12 gap-16">
          <div class="col-span-5">
            <h1 class="text-indigo-500 text-3xl font-brand font-extralight mb-5">Governance</h1>
            <h2 class="text-gray-900 text-6xl font-brand font-extrabold">
              Action Token
            </h2>
            <p class="leading-8 text-gray-500 text-2xl mt-5">
              The Crypto Actions Token (ACTION) is an ERC677 token, used to govern the organization, e.g. vote for official signers, and to promote issues in our <a href="https://github.com/cryptoactions?q=bountyfeed" target="__blank" class="text-indigo-600">bounty feeds</a>.<br />
              <br />
              It is held by the organization and airdropped to users who contributed on GitHub in the past.
            </p>
            <div class="mt-10 text-center">
              <div class="space-x-5">
                <a href="#" class="border inline-block border-gray-300 text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
                  <i class="fab fa-ethereum" /> Contract
                </a>
                <a href="https://github.com/cryptoactions/cryptoactions.github.io/discussions" target="__blank" class="border inline-block border-gray-300 text-gray-900 hover:bg-white rounded-xl text-xl px-4 py-3">
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
            <a href="#" class="inline-block mt-10 text-gray-50 bg-indigo-700 hover:bg-indigo-600 rounded-xl text-xl px-4 py-3">
              <i class="fas fa-hand-holding-usd"></i> Claim Airdrop
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>