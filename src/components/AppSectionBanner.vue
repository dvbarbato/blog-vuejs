<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-5 text-center principal-news">
                    <h2>Veja os úlltimos resultados do campeonato</h2>
                </div>
                <div class="col-5 offset-2 text-center principal-news">
                    <h2>Venha para o centro de treinamento Hcode</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
section {
    margin-top: 25px;
}
.container .row {
    height: 300px;
}
.container .row .col-5:first-child {
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url('../assets/football.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.container .row .col-5:nth-child(2) {
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url('../assets/football2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
h2 {
    margin: 25% 0;
    color: #F6B64E;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10PX;
}
.principal-news {
    cursor: pointer;
}

</style>