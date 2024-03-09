<template>
  <main class="grid lg:grid-cols-2 place-items-center pb-4 ">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/bc.jpg"
        alt="Bike service"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <SlidingText />
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight mt-4">
        {{ $t('hero_header') }}
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl text-justify">
        {{ $t('hero_desc') }}
      </p>
    </div>
  </main>
</template>
