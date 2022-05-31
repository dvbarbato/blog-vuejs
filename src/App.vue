<template>
  <div id="app">

    <app-header 
      @select-championship="changeChampionship"
      @change-component="changeComponent"
    />

    <app-section 
      :championship="championship"
      :current-component="currentSectionComponent"
      />
      
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
      championship: 'Campeonato Brasileiro',
      currentSectionComponent: 'AppSectionBanner'
    }
  },
  methods: {
    changeChampionship(value) {
      this.championship = value

    },
    changeComponent(value) {
      
      let component

      switch (value) {
        case 'home':
          default:
            component = 'AppSectionBanner'
          
          break;
        
        case 'news':
          component = 'AppSectionNews'

          break;
      }

      this.currentSectionComponent = component

    }

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
