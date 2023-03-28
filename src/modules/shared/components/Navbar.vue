<template>
    <div>
        <router-link to="/">Inicio</router-link>
        <router-link :to="{ name: 'movie-id', params: { id: '2baf70d1-42bb-4437-b551-e5fed5a87abe' }}">Peliculas</router-link>
    </div>
</template>

<style scope>
    div {
        padding: 0 30px;
    }

    div a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }
    div .router-link-exact-active {
        color: #42b983;
    }
    
</style>