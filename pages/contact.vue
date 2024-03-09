<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ $t('contact_header') }}</template>
      <template v-slot:desc>{{ $t('contact_desc') }}</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          {{ $t('contact_bc') }}
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          {{ $t('contact_story1') }}<br />
          {{ $t('contact_story2') }}<br />
          {{ $t('contact_story3') }}<br />
          {{ $t('contact_story4') }}
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" />
            <a href="mailto:bikecheck@proton.me">
              bikecheck@proton.me
              </a>
          </div>
        </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
