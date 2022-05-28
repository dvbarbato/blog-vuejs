<template>
  <div id="app">
    <app-header @select-championship="changeChampionship"/>
    <app-section :championship="championship"/>
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
  },
  data() {
    return {
      championship: 'Campeonato Brasileiro'
    }
  },
  methods: {
    changeChampionship(value) {
      this.championship = value
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
