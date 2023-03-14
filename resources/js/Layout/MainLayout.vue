<script setup>
    import { usePage, Link } from '@inertiajs/vue3'
    import { computed } from 'vue'
    const user = computed(() => usePage().props.user)
</script>

<template>
    <main class="min-h-screen flex flex-col h-screen">
        <header class="p-5 text-center bg-gray-100"> 
            <span class="float-left">Hello, {{ user.name }}</span>
            <span class="text-lg font-bold">My App</span>
        </header>
        <div class="flex-1 flex flex-row">
            <nav class="order-first sm:w-32  overflow-y-auto bg-gray-200">
                <ul class="mt-2 space-y-5 pt-5 ">
                    <li><Link class="menu-link" href="/">Home</Link></li>
                    <li><Link class="menu-link" href="/users">Users</Link></li>
                    <li><Link class="menu-link" href="/settings">Settings</Link></li>
                </ul>
            </nav>
            <main class="flex-1  overflow-y-auto p-2"><slot></slot></main>
        </div>
        <footer class="text-center">Footer</footer>
    </main>
</template>