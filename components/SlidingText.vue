<template>
    <div
      class="p-4 bg-gray-100 rounded-md border flex flex-col justify-center items-center overflow-hidden"
    >
      <div class="font-extrabold text-lg [text-wrap:balance] text-gray-700">
        {{ $t('sliding_header') }} 
        <span
          class="inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden"
        >
          <ul
            class="block text-left leading-tight [&_li]:block animate-text-slide"
          >
            <li class="text-indigo-500">{{ $t('sliding_text1') }}</li>
            <li class="text-rose-500">{{ $t('sliding_text2') }}</li>
            <li class="text-green-500">{{ $t('sliding_text3') }}</li>
            <li class="text-yellow-500">{{ $t('sliding_text4') }}</li>
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