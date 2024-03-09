<script setup>
const bikeshopFeatures = [
  {
    title: "Bikeshop profile",
    description:
      "Use us as your business card, get new customers and keep your business in the know.",
  },
  {
    title: "Services",
    description:
      "Create detailed services for your customers, so they could book and get them done.",
  },
  {
    title: "Calendar",
    description:
      "Customers will book your services directly from your calendar, set a timeframe and accept them, plan your work accordingly.",
  },
  {
    title: "Tasks",
    description:
      "Create and manage tasks based on calendar events so your team could be more efficient.",
  },
  {
    title: "Contact customers",
    description:
      "While working on the bike things can go south, get in touch with your customer through an app and work it out.",
  },
  {
    title: "Unclutter your space",
    description:
      "Customers will get notified when to drop off their bikes based on calendar events, you will have them just in time to work on them.",
  },
  {
    title: "Dashboard",
    description:
      "Get a dashboard with all of your important information for current day.",
  },
  {
    title: "All from the web",
    description:
      "Access it all through a web browser, no need to download anything.",
  },

];
</script>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-4 mt-16 gap-16">
    <div v-for="(item, index) of bikeshopFeatures" :key="index" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-16 h-16 shrink-0">
        <Icon class="text-white" name="bx:check" size="48px" />
      </div>      
      <div>
        <h3 class="font-semibold text-lg">{{ $t(`bikeshopFeatures[${index}].title`) }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed text-justify">
          {{ $t(`bikeshopFeatures[${index}].description`) }}
        </p>
      </div>
    </div>
  </div>
</template>
