import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/vue3'
import Layout from './Layout/MainLayout.vue'
import { goBack } from './Helpers/util.js'

createInertiaApp({
  progress: {
    // The color of the progress bar.
    color: 'blue',
    // Whether the NProgress spinner will be shown.
    showSpinner: true,
  },
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]
    page.default.layout = name.startsWith('Auth/') ? undefined : Layout
    return page
  },
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
    app.use(plugin)
    app.component('Link', Link)
    app.config.globalProperties.$goBack = goBack // Make goBack globally available
    app.mount(el)
  },
})

//refresh
// window.onpopstate = function () {
//   location.reload()
// }
