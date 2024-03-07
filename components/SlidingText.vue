<template>
    <div
      class="p-4 bg-gray-100 rounded-md border flex flex-col justify-center items-center overflow-hidden"
    >
      <div class="font-extrabold text-lg [text-wrap:balance] text-gray-700">
        We are here so you could 
        <span
          class="inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden"
        >
          <ul
            class="block text-left leading-tight [&_li]:block animate-text-slide"
          >
            <li class="text-indigo-500">fix your bike.</li>
            <li class="text-rose-500">ride more.</li>
            <li class="text-green-500">wait less.</li>
            <li class="text-yellow-500">have fun!</li>
          </ul>
        </span>
      </div>
    </div>
  </template>
  
  <style>
    .animate-text-slide {
      animation: text-slide 10s cubic-bezier(0.83, 0, 0.17, 1) infinite;
    }
  
    @keyframes text-slide {
      0%,
      24% {
        transform: translateY(0%);
      }
  
      25%,
      49% {
        transform: translateY(-25%);
      }
  
      50%,
      74% {
        transform: translateY(-50%);
      }
  
      75%,
      99% {
        transform: translateY(-75%);
      }
    }
  </style>