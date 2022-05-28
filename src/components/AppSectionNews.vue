<template>
    <section>
        <div class="container">
        
            <app-section-news-individual 
                img-name="news1.jpg"
                img-info="Notícia 1"
                newsTitle="Começam os treinos para a nova temporada"
                newsContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quidem, dolore ipsum quae fugit voluptatem natus consequatur ullam assumenda sit nesciunt odio veniam eligendi tempore possimus non maiores! Quisquam, nemo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum iure consectetur voluptas odit, ea sed quos blanditiis facere, omnis maxime porro sint culpa cupiditate exercitationem corporis fuga facilis eum adipisci!"
                newsDate="01/02/2021"
            />

            <app-section-news-individual 
                img-name="news2.jpg"
                img-info="Notícia 2"
                newsTitle="Jogo do Inter termina empatado"
                newsContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quidem, dolore ipsum quae fugit voluptatem natus consequatur ullam assumenda sit nesciunt odio veniam eligendi tempore possimus non maiores! Quisquam, nemo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum iure consectetur voluptas odit, ea sed quos blanditiis facere, omnis maxime porro sint culpa cupiditate exercitationem corporis fuga facilis eum adipisci!"
                newsDate="03/02/2021"
            />

            <app-section-news-individual 
                img-name="news3.jpg"
                img-info="Notícia 3"
                newsTitle="Real vai inauguarar o novo estádio na sexta-feira"
                newsContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quidem, dolore ipsum quae fugit voluptatem natus consequatur ullam assumenda sit nesciunt odio veniam eligendi tempore possimus non maiores! Quisquam, nemo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum iure consectetur voluptas odit, ea sed quos blanditiis facere, omnis maxime porro sint culpa cupiditate exercitationem corporis fuga facilis eum adipisci!"
                newsDate="06/02/2021"
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
    
}
</script>

<style scoped>
section {
    padding: 50px 0;
    margin-top: 25px;
    background-color: #f37520;
}

</style>