<template>
  <div id="app">
    <app-header />
    <app-section />
    <app-footer />
    
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppSection from './components/AppSection.vue'
import AppFooter from './components/AppFooter.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    AppSection,
    AppFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
