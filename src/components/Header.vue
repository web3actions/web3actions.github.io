<script setup>
import Navbar from './Navbar.vue'
</script>

<template>
  <div class="bg-gray-900">
    <div class="container mx-auto px-5 min-h-screen flex flex-col">
      <Navbar class="justify-self-start" />
      <div class="flex-grow flex flex-col justify-center">
        <div class="grid grid-cols-2 gap-16">
          <div>
            <h1 class="text-indigo-500 text-3xl font-brand font-extralight mb-5">Crypto Actions</h1>
            <h2 class="text-gray-50 text-6xl font-brand font-extrabold">
              Integrate crypto payments right into your CI/CD workflows.
            </h2>
            <p class="leading-8 text-gray-50 text-opacity-50 text-2xl mt-5">
              Crypto Actions is based on the simple idea to connect CI/CD workflows and crypo wallets. This opens up a lot of potential for completely automated and customized payment workflows for open source projects.
            </p>
          </div>
          <div>
            <div class="bg-white bg-opacity-10 h-96 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
