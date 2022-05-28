<template>
    <div>

        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo a notícia do: {{ championship }}</h3>
            </div>
        </div>
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
    props: {
        championship: String
    }

    
}
</script>

<style scoped>

</style>

