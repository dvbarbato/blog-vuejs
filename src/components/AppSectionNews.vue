<template>
    <section>
        <div class="container">
        
            <app-section-news-individual 
                v-for="notice in news" 
                :key="notice.id"
                :img-name="notice.img"
                :img-info="notice.imgInfo"
                :newsContent="notice.content"
                :newsDate="notice.date"
            >
                <template #title>
                   <h2> {{ notice.title }} </h2>
                </template>

                <p>{{ notice.content | truncate(200) }}</p>

            </app-section-news-individual>

        </div>
    </section>
</template>

<script>
import AppSectionNewsIndividual from './AppSectionNewsIndividual.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
      AppSectionNewsIndividual
    },
    data() {
        return {
        
        }
    },
    computed: {
        ...mapGetters({
            news: 'getNews'
        })
    }
}
</script>

<style scoped>
section {
    padding: 50px 0;
    margin-top: 25px;
    background-color: #f37520;
}

</style>