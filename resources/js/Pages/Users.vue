<script setup>
const props = defineProps({
  users: Array
})
</script>

<template>
    <h1 class="title">Users</h1>
    <ul>
        <li v-for="user in users" :key="user.email">{{ user.name }}</li>
    </ul>
</template>