<template>
    <div>
        <app-section-banner />
        <app-section-news />
    
    </div>

</template>

<script>
import AppSectionBanner from './AppSectionBanner.vue'
import AppSectionNews from './AppSectionNews.vue'

export default {
  components: { 
      AppSectionBanner, 
      AppSectionNews 
    },
    
}
</script>

<style scoped>

</style>

