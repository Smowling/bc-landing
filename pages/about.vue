<script setup>
definePageMeta({
  layout: "landing",
});

</script>

<template>
  <LandingContainer>

    <main class="grid lg:grid-cols-2 place-items-center pb-4 ">
      <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight mt-4">
        {{ $t('about_header') }}
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl text-justify">
        {{ $t('about_story1')}}<br />
        {{ $t('about_story2')}}<br />
        {{ $t('about_story3')}}
      </p>
    </div>

    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
        src="~/assets/img/me.jpg"
        alt="Thats a ME!"
        loading="eager"
        format="avif"
      />
      <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">Daniel Smółka</h2>
          <h3 class="text-sm text-slate-500">One man army</h3>
        </div>
    </div>
  </main>
  </LandingContainer>
</template>