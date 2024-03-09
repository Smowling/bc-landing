<template>
  <div
    class="bg-black px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"
  >
    <h2 class="text-white text-3xl md:text-6xl pb-6">{{ $t('cta_header') }}</h2>
    <div class="flex mt-5">
      <LandingLink href="/contact" styleName="inverted">{{ $t('cta_text') }}</LandingLink>
    </div>
  </div>
</template>
