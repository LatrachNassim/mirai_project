<script setup lang="ts">
import { useRoute } from 'vue-router';
import chapters from "../data/chaptersData"

const route = useRoute();

const id = Number(route.params.id)

const chapter = chapters.find((chap) => chap.id === id)




</script>

<template>
   

<div v-if="chapter" class="grid grid-cols-3 items-center">
  <RouterLink to="/">←</RouterLink>
  <h1 class="text-center">{{ chapter.title }}</h1>
</div>
<div v-else>
    <p class="text-red-500">Ce chapitre n'existe pas</p>
    <RouterLink to="/">Retour aux Chapitres</RouterLink>
    
    
</div>
    
</template>