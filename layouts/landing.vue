<template>
  <LandingNavbar></LandingNavbar>
  <slot></slot>
  <LandingFooter></LandingFooter>
  <SpeedInsights />
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>