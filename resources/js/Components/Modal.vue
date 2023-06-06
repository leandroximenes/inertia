<script setup>
import { ref, watch } from 'vue'
import { usePage } from '@inertiajs/vue3'

const modal = ref({
  showModal: false,
  color: '',
  title: '',
  message: '',
})

const updateModal = () => {
  if (usePage().props.flash) {
    modal.value.showModal = true
    modal.value.color = usePage().props.flash.color
    modal.value.title = usePage().props.flash.title
    modal.value.message = usePage().props.flash.message
  } else {
    modal.value.showModal = false
    modal.value.color = ''
    modal.value.title = ''
    modal.value.message = ''
  }
}

watch(
  () => usePage().props.flash,
  () => {
    updateModal()
  },
)

updateModal()
const getModalColorClass = () =>
  `bg-${modal.value.color}-200 text-${modal.value.color}-800`
</script>

<template>
  <div class="mt-3">
    <div
      class="p-4 mb-4 text-md rounded-lg text-center"
      :class="[getModalColorClass()]"
      role="alert"
      v-if="modal.showModal"
    >
      <span class="font-medium">{{ modal.title }}</span>
      {{ modal.message }}
    </div>
  </div>
</template>

<style>
/* Define required colors */
.bg-blue-200 {
  background-color: #bfdbfe;
}
.text-blue-800 {
  color: #1e3a8a;
}

.bg-green-200 {
  background-color: #c6f6d5;
}
.text-green-800 {
  color: #047857;
}

.bg-yellow-200 {
  background-color: #fde68a;
}
.text-yellow-800 {
  color: #b45309;
}

.bg-red-200 {
  background-color: #fecaca;
}
.text-red-800 {
  color: #991b1b;
}
</style>
