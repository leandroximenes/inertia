<script setup>
const props = defineProps({
  users: Object,
});
</script>

<template>
  <div class="mt-5 text-center">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px">
        <li v-for="(link, key) in users.links" :key="key">
          <Component
            :is="link.url ? 'Link' : 'span'"
            v-bind:href="link.url"
            class="pagination-item"
            v-html="link.label"
            :class="{
              'rounded-l-lg': key === 0,
              'rounded-r-lg': key === users.links.length - 1,
              'text-blue-600 bg-blue-50 bg-blue-100 text-blue-700': link.active,
            }"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
span {
  cursor: not-allowed;
}
</style>
