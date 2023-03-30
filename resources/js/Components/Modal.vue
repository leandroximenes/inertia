<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    message: Object,
});

const modal = ref({
    showModal: false,
    color: 'blue',
    title: '',
    message: ''
});

const getModalColorClass = () => `bg-${modal.value.color}-50 text-${modal.value.color}-800`

watch(() => props.message, (newValue) => {
    if (newValue !== null) {
        modal.value.showModal = true;
        modal.value.color = newValue.color;
        modal.value.title = newValue.title;
        modal.value.message = newValue.message;

        setTimeout(() => {
            modal.value.showModal = false;
        }, 2000);
    }
});

</script>

<template>
    <div class="fixed mt-3 w-full z-50 flex justify-center items-start">
        <div class="p-4 mb-4 text-sm rounded-lg" :class="[getModalColorClass()]" role="alert" v-if="modal.showModal">
            <span class="font-medium">{{ modal.title }}</span> {{ modal.message }}
        </div>
    </div>
</template>
  

