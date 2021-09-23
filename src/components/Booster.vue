<template>
  <div class="bg-indigo-900">
    <div class="mx-auto max-w-xl px-5 min-h-screen flex flex-col">
      <div class="flex-grow flex flex-col justify-center text-center">
        <h1 class="text-white text-opacity-50 text-3xl font-brand font-extralight mb-10">Built with Web3 Actions</h1>
        <h2 class="text-gray-50 text-6xl font-booster font-extrabold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 inline-block opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
          booster
        </h2>
        <p class="leading-8 text-white text-opacity-60 text-2xl mt-8 mb-16">
          Booster is a simple bounty service.<br />
          Deposit ETH on any open issue on GitHub or withdraw from an issue you have solved.
        </p>
        <div>
          <input
            type="text"
            class="w-full text-white border-0 focus:border-white ring-1 ring-white ring-opacity-70 focus:ring-4 focus:ring-white p-5 bg-transparent rounded-xl placeholder-white placeholder-opacity-70"
            placeholder="https://github.com/.../.../issues/..."
          />
          <a href="https://ethbooster.github.io" target="__blank" class="border-0 font-extrabold font-booster inline-block text-indigo-600 bg-gray-50 hover:bg-white rounded-xl text-xl px-8 py-3 mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
            Deposit
          </a>
        </div>
      </div>
    </div>
  </div>
</template>