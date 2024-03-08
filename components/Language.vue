<template>
    <div>
        <select v-model="language">
            <option 
            v-for="locale in locales" 
            :value="locale.code"
            :key="locale.code"
            >{{ locale.name }} {{ locale.flag }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();
const language = computed({
    get: () => locale.value,
    set: (value: string) => setLocale(value)
})
</script>

<style lang="scss" scoped>

</style>