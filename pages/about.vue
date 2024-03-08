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
        What is it all about
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl text-justify">
        Hi, I'm Daniel and I hate to leave my bike at LBS for weeks to gather dust and wait for a fix. So... I'm working on Bikecheck!<br />
        Thats the main reason, but the scope grew. Now I want to create a platform that connects bikeshops with customers and smooths the expirience for both sides.<br />
        For the moment its but a landing page, to gather leads and ideas, feel free to let me know if you have any.
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