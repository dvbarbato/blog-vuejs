export default {
    state: {
        news: [{
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
    },
    getters: {
        getNews(state) {
            return state.news
        }
    }
}