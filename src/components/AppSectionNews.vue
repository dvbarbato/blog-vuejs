<template>
    <section>
        <div class="container">
        
            <app-section-news-individual 
                v-for="notice in news" 
                :key="notice.id"
                :img-name="notice.img"
                :img-info="notice.imgInfo"
                :newsTitle="notice.title"
                :newsContent="notice.content"
                :newsDate="notice.date"
            />

        </div>
    </section>
</template>

<script>
import AppSectionNewsIndividual from './AppSectionNewsIndividual.vue'
export default {
  components: {
      AppSectionNewsIndividual
    },
    data() {
        return {
            news: []
        }
    },
    created() {
        // Transformar o data em JSON
        this.news = [{
            id: 1,
            title: 'Começam os treinos para a nova temporada',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quidem, dolore ipsum quae fugit voluptatem natus consequatur ullam assumenda sit nesciunt odio veniam eligendi tempore possimus non maiores! Quisquam, nemo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum iure consectetur voluptas odit, ea sed quos blanditiis facere, omnis maxime porro sint culpa cupiditate exercitationem corporis fuga facilis eum adipisci!',
            date: '2021-01-04',
            img: 'news1.jpg',
            imgInfo: 'Notícia 1'
        }, {
            id: 2,
            title: 'Jogo do Inter termina empatado',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quidem, dolore ipsum quae fugit voluptatem natus consequatur ullam assumenda sit nesciunt odio veniam eligendi tempore possimus non maiores! Quisquam, nemo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum iure consectetur voluptas odit, ea sed quos blanditiis facere, omnis maxime porro sint culpa cupiditate exercitationem corporis fuga facilis eum adipisci!',
            date: '2021-01-05',
            img: 'news2.jpg',
            imgInfo: 'Notícia 2'
        }, {
            id: 3,
            title: 'Real vai inauguarar o novo estádio na sexta-feira',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quidem, dolore ipsum quae fugit voluptatem natus consequatur ullam assumenda sit nesciunt odio veniam eligendi tempore possimus non maiores! Quisquam, nemo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum iure consectetur voluptas odit, ea sed quos blanditiis facere, omnis maxime porro sint culpa cupiditate exercitationem corporis fuga facilis eum adipisci!',
            date: '2021-01-09',
            img: 'news3.jpg',
            imgInfo: 'Notícia 3'

        }]
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