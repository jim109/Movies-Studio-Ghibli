<template>
    <h1>Movie</h1>
    <div v-if="movie" id="movie.id">
        <h2>{{ movie.title }}</h2>
        <img :src="movie.image" :alt="movie.title">
        <p>{{ movie.description }}</p>
        <p>{{ movie.director }}</p>
        <p>{{ movie.original_title }}</p> 
        <p>{{ movie.producer }}</p> 
        <p>{{ movie.release_date }}</p> 
        <p>{{ movie.rt_score }}</p> 
        <img :src="movie.movie_banner" :alt="movie.title">  
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
            movie: ''
        }
    },
    created() {
        this.getMovie()  
    },
    methods:{
        async getMovie() {
            try {
                const movie = await fetch(`https://demo5947973.mockable.io/movies/${ this.id }`).then( r => r.json());
                this.movie = movie
               
            } catch (error) {   
                this.$router.push('/')
                console.log("No hay nada que hacer aqui")
            }
        }
    },
    watch: {
        id() {
            this.getMovie()
        }
    }
}
</script>