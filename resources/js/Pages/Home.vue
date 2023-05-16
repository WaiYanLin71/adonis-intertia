<template>
  <NavBar />
</template>

<script setup>
import { Head } from '@inertiajs/vue3'
import NavBar from '../components/NavBar.vue'
const props = defineProps({
  title: String
})
</script>

<style lang="scss" scoped></style>
