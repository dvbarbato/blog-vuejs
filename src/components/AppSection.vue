<template>
    <div>

        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo a notícia do: {{ championship }}</h3>
            </div>
        </div>

        <component :is="currentComponent"></component>

       

        <div class="container">
            <div class="row my-club mt-5">
                <div class="col-6">
                    <h2>Seu clube é: {{ myClub }}</h2>
                </div>
                <div class="col-6">
                    <app-input v-model="myClub"/>
                </div>
            </div>
        </div>
    
    </div>

</template>

<script>
import AppInput from './AppInput.vue'
import AppSectionBanner from './AppSectionBanner.vue'
import { mapGetters } from 'vuex' //As { } serve para trazer somente o module mapState sem ficar pesado


export default {
    components: { 
      AppSectionBanner, 
      AppSectionNews: () => import('./AppSectionNews.vue'),
      AppInput 
    },
    data() {
        return {
            
        }
    },
    props: {

        currentComponent: String
    },
    computed: {
        ...mapGetters({
            championship: 'getChampionship',
            myClub: 'getClubName'
        }),
    }
}
</script>

<style scoped>

</style>

