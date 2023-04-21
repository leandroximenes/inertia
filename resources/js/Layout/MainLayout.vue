<script setup>
import ComponentModal from '../Components/Modal.vue'
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
const user = computed(() => usePage().props.user)
</script>

<template>
  <main class="min-h-screen flex flex-col h-screen">
    <ComponentModal></ComponentModal>
    <header class="p-5 bg-gray-200">
      <span class="text-lg font-bold">{{ $page.props.appName }}</span>
      <span class="float-right">Hello, {{ user.name }}</span>
    </header>
    <div class="flex-1 flex flex-row">
      <nav class="order-first sm:w-36 overflow-y-auto bg-gray-300">
        <ul class="pt-1">
          <li>
            <Link
              class="menu-link"
              href="/"
              :class="{
                'menu-link-active': $page.component.startsWith('Home'),
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-5 mx-1 pt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                  clip-rule="evenodd"
                />
              </svg>
              Início
            </Link>
          </li>
          <li>
            <Link
              class="menu-link"
              href="/users"
              :class="{
                'menu-link-active': $page.component.startsWith('Users'),
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-5 mx-1 pt-1"
              >
                <path
                  d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"
                />
              </svg>
              Usuários
            </Link>
          </li>
          <li>
            <Link
              class="menu-link"
              href="/settings"
              :class="{
                'menu-link-active': $page.component.startsWith('Settings'),
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-5 mx-1 pt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Configurações
            </Link>
          </li>
        </ul>
      </nav>
      <main class="flex-1 overflow-y-auto p-2 bg-gray-100">
        <slot></slot>
      </main>
    </div>
    <footer class="text-center bg-gray-800 text-white">
      © All rights reserved
    </footer>
  </main>
</template>
