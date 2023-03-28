import { createRouter, createWebHashHistory } from 'vue-router'

//Rutas de la pagina
const routes = [

    {
        path: '/',
        component: ()=>import(/* webpackChunkName: "ListPages" */ '@/modules/movies/pages/ListMoviesPage'),
    },
    {
        path: '/:id',
        name: 'movie-id',
        component: ()=>import(/* webpackChunkName: "ListPages" */ '@/modules/movies/pages/MoviePage'),
        props: ( route ) => {
            const id = route.params.id 
            
            return  id 
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: ()=>import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router