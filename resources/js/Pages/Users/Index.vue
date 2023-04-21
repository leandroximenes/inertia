<script setup>
import { ref, watch } from 'vue'
import Pagination from '../../Components/Pagination.vue'
import { router } from '@inertiajs/vue3'
import debounce from 'lodash/debounce'

const props = defineProps({
  users: Object,
  filters: Object,
})

let search = ref(props.filters.search)

watch(
  search,
  debounce(function (value) {
    console.log(value)
    router.get(
      '/users',
      { search: value },
      {
        preserveState: true,
        preserveScroll: true,
        replace: true,
      },
    )
  }, 200),
)
</script>

<template>
  <pre></pre>
  <div class="py-4">
    <h1 class="title my-0">Usuários</h1>
  </div>

  <div class="flex justify-between py-4">
    <input
      type="text"
      v-model="search"
      placeholder="Search..."
      class="border rounded-md px-2"
    />
    <Link href="/users/create" class="my-primary-button"> Adicionar </Link>
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">
            <div class="flex items-center">Name</div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex items-center">Email</div>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="(user, key) in users.data"
          :id="key"
        >
          <td class="px-6 py-4">
            {{ user.name }}
          </td>
          <td class="px-6 py-4">
            {{ user.email }}
          </td>
          <td class="px-6 py-4 text-right">
            <a
              href="#"
              class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <Pagination :users="users" />
</template>
