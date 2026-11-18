<script setup lang="ts">
import { ref } from 'vue'
import chapters  from '../data/ChaptersData'

const open = ref<number | null>(1) // 1 ouvert par défaut





function toggle(id: number) {
  open.value = open.value === id ? null : id
}



</script>

<template>
  <main>


    <h1 class="text-center uppercase">Chapitre</h1>

    <div class="flex flex-col gap-3">

      <!-- (A) un chapitre complet : c'est LUI qui se répète -->
      <div v-for="chapter in chapters" :key="chapter.id">

        <!-- (B) la ligne : titre + flèche -->
        <div class="flex justify-between p-3">
          <h2 class="font-bold">
            <RouterLink  :to="`/chapitre/${chapter.id}`">{{ chapter.title }}</RouterLink>
          </h2>
          <button @click="toggle(chapter.id)" class="cursor-pointer"
            :class="{ 'rotate-90': open === chapter.id }">▸</button>
        </div>

        <!-- (C) le résumé -->
        <div v-show="open === chapter.id" class="p-2.5 border border-[#C4C4C4]">
          {{ chapter.summary }}
        </div>
      </div>
    </div>
  </main>
</template>
