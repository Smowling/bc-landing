<template>
    <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ $t('bikeshop_header') }}</template>
    </LandingSectionhead>

    <BikeshopFeatures></BikeshopFeatures>

  </LandingContainer>
</template>

<script setup>
definePageMeta({
  layout: "landing",
});

</script>

<style lang="scss" scoped>

</style>