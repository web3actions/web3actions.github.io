<template>
  <div class="w-full h-screen absolute z-0 top-0 left-0 bg-white">
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" class="opacity-25">
    <defs>
    <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop><stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop></radialGradient>
    <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop></radialGradient>
    <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop></radialGradient>
    <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop></radialGradient>
    <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop></radialGradient>
    </defs>
    <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="70s" repeatCount="indefinite"></animateTransform></rect>
    <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="120s" repeatCount="indefinite"></animateTransform>
    </rect>
    <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="90s" repeatCount="indefinite"></animateTransform>
    </rect>
    </svg>
  </div>
  <div class="bg-cover relative overflow-hidden">
    <div class="container mx-auto px-5 min-h-screen flex flex-col relative">
      <div class="flex-grow flex flex-col justify-center">
        <div class="grid grid-cols-2 gap-16">
          <div>
            <h1 class="text-indigo-600 text-3xl font-brand mb-5 font-semibold">Web3 Actions</h1>
            <h2 class="leading-tight text-green-100 text-6xl font-brand font-extrabold mix-blend-difference">
              DevOps meets Crypto
            </h2>
            <p class="leading-relaxed text-red-600 text-2xl mt-5 mix-blend-difference">
              Web3 Actions are the building blocks that connect your GitHub workflows with your crypto wallets and smart contracts. This unlocks a lot of potential for automated and completely customizable payment workflows for open source projects.
            </p>
          </div>
          <div class="flex justify-center items-center">
            <div class="w-3/4">
              <div class="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden filter bg-blend-lighten">
                <iframe src="https://www.youtube-nocookie.com/embed/cP0I9w2coGU" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>