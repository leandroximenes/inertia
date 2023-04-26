<script setup>
import ComponentModal from '../Components/Modal.vue'
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { HomeIcon, UsersIcon, CogIcon } from '@heroicons/vue/24/solid'
const user = computed(() => usePage().props.user)
</script>

<template>
  <main class="min-h-screen flex flex-col h-screen">
    <ComponentModal></ComponentModal>
    <header class="p-5 bg-gray-200">
      <span class="text-lg font-bold">{{ $page.props.appName }}</span>
      <Link
        href="/logout"
        method="post"
        class="float-right mx-2 font-bold hover:underline"
        >Log Out</Link
      >
      <span class="float-right">Hello, {{ user.name }}</span>
    </header>
    <div class="flex-1 flex flex-row">
      <nav class="order-first sm:w-40 overflow-y-auto bg-gray-300">
        <ul class="pt-1">
          <li>
            <Link
              class="menu-link"
              href="/"
              :class="{
                'menu-link-active': $page.component.startsWith('Home'),
              }"
            >
              <HomeIcon class="w-4 h-4" />
              <span>Início</span>
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
              <UsersIcon class="w-4 h-4" />
              <span>Usuários</span>
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
              <CogIcon class="w-4 h-4" />
              <span>Configurações</span>
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
