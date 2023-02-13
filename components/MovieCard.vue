<template>
    <div class="h-128 w-64 border flex flex-col text-center" >
        <NuxtLink :to="`/movies/${movie?.id}`" class="mb-5 bg-green-600 inline-block">
            <img class="transform hover:translate-x-6 hover:translate-y-6 delay-50 duration-100 inline-block" 
            :src="imgURL">
        </NuxtLink>
        <p class="text-lg px-1 text-center">
          {{ movie?.title }}
        </p>

        <p class=" px-2 text-m text-lightgray break-words text-wrap truncate overflow-hidden">
            {{ movie?.overview }}
        </p>
  
    </div>
</template>

<script setup lang="ts">
 
import { PropType } from 'vue';
import { Movie } from '~~/types/Movie';

const props = defineProps({
    movie: {
        type: Object as PropType<Movie>
    }
})

const config = useRuntimeConfig()
console.log(props)
// console.log(`${config.public.imgBaseUrl}/${props.movie.poster_path}`)
const imgURL = computed(() => props.movie?.poster_path != null ? `${config.public.imgBaseUrl}/${props.movie.poster_path}` : `https://via.placeholder.com/300x500d`)

</script>