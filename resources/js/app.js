import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/vue3'
import DefaultLayout from './Layouts/DefaultLayout.vue'
createInertiaApp({
  resolve: name => {
    let page = require(`./Pages/${name}`).default

    if(!page.layout) {
      page = DefaultLayout;
    }

    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .component('inertia-link', Link)
      .use(plugin)
      .mount(el)
  },
})
