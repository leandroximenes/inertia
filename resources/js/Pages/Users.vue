<script setup>
import Pagination from '../Components/Pagination.vue'
const props = defineProps({
  users: Object
})
</script>

<template>
  <h1 class="title">Users</h1>
  <ul>
    <!-- <li v-for="user in users" :key="user.email">{{ user.name }}</li> -->
  </ul>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            <div class="flex items-center">
              Name
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex items-center">
              Email
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(user, key) in users.data" :id="key">
          <td class="px-6 py-4">
            {{ user.name }}
          </td>
          <td class="px-6 py-4">
            {{ user.email }}
          </td>
          <td class="px-6 py-4 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <Pagination :users="users"/>
</template>