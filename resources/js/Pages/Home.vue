<template>
  <div class="container mt-10">
    <user-list :users="users"></user-list>
  </div>
</template>



<script>
import DefaultLayout from '@/Layouts/DefaultLayout.vue'
export default {
  layout: DefaultLayout
}
</script>


<script setup>
import UserList from '@/components/UserList.vue'
import { defineProps } from 'vue';
const { users } = defineProps(['users'])
</script>

<style lang="scss" scoped></style>
