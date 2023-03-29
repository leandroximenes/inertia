<script setup>
import { reactive } from "vue";
import { router } from '@inertiajs/vue3'

defineProps({
    errors: Object
})


let form = reactive({
    name: '',
    email: '',
    password: ''
})

let submit = () => {
    router.post('/users', form)
}


</script>

<template>
    <h1 class="title">Adicionar Usuário</h1>
    <form @submit.prevent="submit" class="my-form max-w-xl x-auto">
        <div class="mb-2">
            <label for="name">Nome:</label>
            <input type="text" v-model="form.name" placeholder="Nome" required>
            <span class="error">{{ errors.name }}</span>
        </div>
        <div class="mb-2">
            <label for="email">Email:</label>
            <input type="email" v-model="form.email" placeholder="name@flowbite.com" required>
            <span class="error">{{ errors.email }}</span>
        </div>
        <div class="mb-2">
            <label for="password">Senha:</label>
            <input type="password" v-model="form.password" required>
            <span class="error">{{ errors.password }}</span>
        </div>
        <div class="text-center">
            <button type="submit">Salvar</button>
            <button type="button">Cancelar</button>
        </div>
    </form>
</template>