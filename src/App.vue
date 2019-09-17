<template>
  <div id="app">
    <NavComponent />
    <router-view/>
    <FooterComponent />
  </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    components: {
      NavComponent,
      FooterComponent
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $color-primary;
  color: $color-white;
}
</style>
