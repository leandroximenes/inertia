<script setup>
import { ref } from 'vue'
import ComponentModal from '../Components/Modal.vue'
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import {
  HomeIcon,
  UsersIcon,
  CogIcon,
  Bars3Icon,
} from '@heroicons/vue/24/solid'
const user = computed(() => usePage().props.user)

const isMobile = ref(window.innerWidth < 640)
const menu = ref({
  show: !isMobile.value,
})
const toggleMenu = () => {
  if (isMobile.value) {
    menu.value.show = !menu.value.show
  }
}
</script>

<template>
  <main class="min-h-screen flex flex-col h-screen">
    <header class="p-5 bg-gray-200 flex justify-between">
      <span class="text-lg font-bold flex">
        <Bars3Icon
          class="w-6 h-6 mr-1 my-auto cursor-pointer"
          @click="toggleMenu"
          v-show="isMobile"
        />
        {{ $page.props.appName }}
      </span>
      <span>
        <Link
          href="/logout"
          method="post"
          class="float-right mx-2 font-bold hover:underline"
          >Sair</Link
        >
        <span class="float-right">Hello, {{ user.name }}</span>
      </span>
    </header>
    <div class="flex-1 flex flex-row">
      <nav class="menu" v-show="menu.show">
        <ul class="pt-1">
          <li>
            <Link
              class="menu-link"
              href="/"
              :class="{
                'menu-link-active': $page.component.startsWith('Home'),
              }"
              @click="toggleMenu"
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
              @click="toggleMenu"
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
              @click="toggleMenu"
            >
              <CogIcon class="w-4 h-4" />
              <span>Configurações</span>
            </Link>
          </li>
        </ul>
      </nav>
      <main class="p-2 flex-1 bg-gray-100">
        <FlashMessage></FlashMessage>
        <slot></slot>
      </main>
    </div>
    <!-- <footer class="text-center bg-gray-800 text-white">
      © All rights reserved
    </footer> -->
  </main>
</template>
