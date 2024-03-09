<script setup>
const features = [
  {
    title: "Find your LBS",
    description:
      "Use our search and find your local bikeshop. We have a map that will help you out.",
    icon: "bx:search-alt",
  },
  {
    title: "Choose services",
    description:
      "Figure out what type of service or maintanance you need. Bikeshops have a list of services that you can choose from.",
    icon: "bx:list-check",
  },
  {
    title: "Book a date",
    description:
      "Check avaliable date and book it, if you know your service technician you can directly book to them.",
    icon: "bx:calendar-exclamation",
  },
  {
    title: "Get notified",
    description:
      "Bikeshop accepts your request and when the time comes, we will mail you remind you to drop off your bike.",
    icon: "bx:bxs-message-check",
  },
  {
    title: "Wait for it",
    description:
      "Now its all up to the bikeshop. When they are all done or something comes out they will contanct you.",
    icon: "bx:alarm-snooze",
  },
  {
    title: "Pick up your ride",
    description:
      "It's time for you to have fun, grab your bike and remember to check out if all required maintanance was performed.",
    icon: "bx:calendar-check",
  },
  {
    title: "Bike history",
    description:
      "Bikeshop will register a maintanance under your bike history, so you could have it all in one place.",
    icon: "bx:bxs-notepad",
  },
  {
    title: "Rate your service",
    description:
      "Now you can share your expirience, rating and reviewing your service.",
    icon: "bx:bxs-star-half",
  },

];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      {{ $t('features_header') }}
    </h2>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-4 mt-16 gap-16">
    <div v-for="(item, index) of features" :key="index" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-16 h-16 shrink-0">
        <Icon class="text-white" :name="item.icon" size="48px" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ $t(`features[${index}].title`) }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed text-justify">
          {{ $t(`features[${index}].description`) }}
        </p>
      </div>
    </div>
  </div>
</template>
