<script setup>
import { useForm } from '@inertiajs/vue3'

let form = useForm({
  name: '',
  email: '',
  password: '',
})

let submit = () => {
  form.post('/users')
}
</script>

<template>
  <h1 class="title">Adicionar Usuário</h1>
  <form
    @submit.prevent="submit"
    class="my-form max-w-xl x-auto"
    autocomplete="off"
  >
    <div class="mb-2">
      <label for="name">Nome:</label>
      <input
        type="text"
        v-model="form.name"
        placeholder="Nome"
        required
        autofocus
      />
      <span class="error">{{ form.errors.name }}</span>
    </div>
    <div class="mb-2">
      <label for="email">Email:</label>
      <input type="text" v-model="form.email" placeholder="name@flowbite.com" />
      <span class="error">{{ form.errors.email }}</span>
    </div>
    <div class="mb-2">
      <label for="password">Senha:</label>
      <input type="password" v-model="form.password" required />
      <span class="error">{{ form.errors.password }}</span>
    </div>
    <div class="text-center">
      <button type="submit" :disabled="form.processing">Salvar</button>
      <button type="button" @click="$goBack">Cancelar</button>
    </div>
  </form>
</template>
