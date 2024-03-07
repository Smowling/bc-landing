<script setup>
definePageMeta({
  layout: "landing",
});

const pricing = [
  {
    name: "Bikeshop",
    price: "TBD",
    popular: true,
    features: [
      "All Features",
      "Bikeshop page",
      "Calendar and tasks",
      "Contact customers",
      "Virtual bike queue",
      "Dashboard",
    ],
    button: {
      text: "Contact us",
      link: "/contact",
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Pricing</template>
      <template v-slot:desc
        >Simple & Predictable pricing. No Surprises.</template
      >
    </LandingSectionhead>

    <div class="flex justify-center md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingPricing v-for="item of pricing" :plan="item" />
    </div>
  </LandingContainer>
</template>
