<template>
     <div id="app" class="keen-docs">

        <side-bar class="is-desktop"></side-bar>

        <transition name="transition-fade">
            <div
                class="keen-docs-mobile-sidebar__backdrop"
                @click="showSidebar = false"
                v-show="showSidebar"
            ></div>
        </transition>

        <transition name="transition-slide">
            <side-bar class="is-mobile" v-show="showSidebar"></side-bar>
        </transition>
          <div class="keen-docs-content__toolbar">
              <div class="keen-docs-content__toolbar-content">
                  <ui-icon-button
                      class="keen-docs-content__toolbar-menu-button"
                      color="white"
                      type="clear"

                      @click="showSidebar = true"
                  >
                      <ui-icon>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6h18v2.016H3V6zm0 6.984v-1.97h18v1.97H3zM3 18v-2.016h18V18H3z"/></svg>
                      </ui-icon>
                  </ui-icon-button>

                  <h1 class="keen-docs-content__toolbar-title">{{ $route.meta.title }}</h1>

                  <a
                      class="keen-docs-content__toolbar-action"
                      rel="noopener"
                      target="_blank"

                      :href="'https://github.com/djoq/vuex-boilerplate/blob/master/src/' + $route.meta.sourceUrl"

                      v-if="$route.meta.sourceUrl"
                  >View Source</a>
              </div>
          </div>

          <div class="keen-docs-content__page-content is-desktop" ref="pageContent">
              <router-view ></router-view>
          </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showSidebar: false,
      description: process.env.META.description
    }
  },
  watch: {
    '$route' () {
      this.updatePageTitle()

      this.$nextTick(() => {
        this.$refs.pageContent.scrollTop = 0
        this.showSidebar = false
      })
    }
  },

  mounted () {
    this.updatePageTitle()
  },

  methods: {
    updatePageTitle () {
      document.title = this.$route.meta.title + ' | ' + this.description
    }
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
