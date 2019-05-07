<template>
    <aside class="keen-docs-sidebar">
        <div class="keen-docs-sidebar__header">
            <span class="keen-docs-sidebar__header-brand">{{brand}}</span>

            <a
                class="keen-docs-sidebar__header-version"
                href="#/"
                rel="noopener"
                title="View application"
            >{{application}}</a>
        </div>

        <div class="keen-docs-sidebar__scrollable">


            <ul class="keen-docs-sidebar__menu">
                <li class="keen-docs-sidebar__menu-section">
                </li>

                <li class="keen-docs-sidebar__menu-section" v-for="section in menu" :key="section.title">
                    <div class="keen-docs-sidebar__menu-section-header">{{ section.title }}</div>

                    <ul class="keen-docs-sidebar__menu-section-links">
                        <li v-for="item in section.menu" :key="item.path">
                            <router-link
                                class="keen-docs-sidebar__menu-item" exact
                                :to="item.path"
                            >
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
import { menu } from '../router/index.js'
// import UiIcon from 'src/UiIcon.vue';
// import UiSelect from 'src/UiSelect.vue';

export default {
  name: 'sidebar',
  data () {
    return {
      application: 'app1',
      brand: process.env.META.title,
      menu
    }
  },
  methods: {
    onVersionSelect (version) {
      if (version === 'app1') {
      }

//      let root = ''
//      const component = window.location.hash + (version === '0.8.9' ? '-docs' : '')


      // window.location = `${root}/${version}/${component}`
    }
  }
}
</script>
