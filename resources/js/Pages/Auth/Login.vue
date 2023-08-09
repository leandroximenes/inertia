<script setup>
import { useForm } from '@inertiajs/vue3'

let form = useForm({
  email: 'leandro@example.com',
  password: '123456',
})

let submit = () => {
  form.post('/login')
}
</script>

<template>
  <section class="bg-gray-50">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <form
          @submit.prevent="submit"
          class="my-form max-w-xl x-auto"
          autocomplete="off"
        >
          <h1 class="my-2 text-xl text-center font-bold">
            Sign in to your account
          </h1>
          <div class="mb-2">
            <label for="email">Email:</label>
            <input
              type="email"
              v-model="form.email"
              placeholder="name@flowbite.com"
            />
            <span class="error">{{ form.errors.email }}</span>
          </div>
          <div class="mb-2">
            <label for="password">Senha:</label>
            <input type="password" v-model="form.password" required />
            <span class="error">{{ form.errors.password }}</span>
          </div>
          <div class="text-center">
            <button type="submit" :disabled="form.processing">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
