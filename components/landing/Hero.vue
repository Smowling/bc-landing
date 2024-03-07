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
        Book and service your bike with us
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl text-justify">
        Bikecheck! is a website that will help you find local bike service, book and service your bike.
        We are here so you could be on your bike more.
      </p>
    </div>
  </main>
</template>
