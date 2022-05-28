<template>
    <section>
        <div class="container">
        
            <app-section-news-individual />
            <app-section-news-individual />
            <app-section-news-individual />
        
        </div>
    </section>
</template>

<script>
import AppSectionNewsIndividual from './AppSectionNewsIndividual.vue'
export default {
  components: {
      AppSectionNewsIndividual
    },
    
}
</script>

<style scoped>
section {
    padding: 50px 0;
    margin-top: 25px;
    background-color: #f37520;
}

</style>