

<script setup lang="ts">
import { ref } from 'vue'

const open = ref<number | null>(1) // 1 ouvert par défaut

function toggle(id: number) {
  open.value = open.value === id ? null : id
}



</script>

<template>

    
 
  <main>
    <div>

    <h1 class="text-center uppercase" >Chapitre</h1>
    <div>
      <div class="flex justify-between p-3">
        <h2 class="font-bold">Chapitre 1</h2>
        <button @click="toggle(1)" class="cursor-pointer" :class="{'rotate-90': open === 1}">▸</button>
      </div>

        <div v-show="open === 1" class="p-2.5 border border-[#C4C4C4]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, error. Sequi velit perspiciatis excepturi modi voluptas facere ipsum sit fuga, voluptate, libero adipisci provident rerum fugit iure odio cupiditate. Vero?
          </p>
          <p>
            Check out this guide to learn how to
            <a href="/docs/getting-started/introduction/" target="_blank">
              get started
            </a>.
          </p>
        </div>
      </div>

      <!-- ITEM 2 -->
      <div class="flex justify-between p-3">
        <h2 class="font-bold">Chapitre 2</h2>
        <button @click="toggle(2)" class="cursor-pointer" :class="{'rotate-90': open === 2}">▸</button>
      </div>

        <div v-show="open === 2" class="p-2.5 border border-[#C4C4C4]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit quia odio nostrum, excepturi vel aliquid cum libero ea iusto, eligendi voluptatibus architecto, itaque debitis at deleniti accusantium officiis deserunt.
          </p>
          <p>
            <a href="https://flowbite.com/figma/" target="_blank">
              Figma design system
            </a>
          </p>
        </div>
      </div>

      <!-- ITEM 3 -->
      <div class="flex justify-between p-3">
        <h2 class="font-bold">Chapitre 3</h2>
        <button @click="toggle(3)" class="cursor-pointer" :class="{'rotate-90': open === 3}">▸</button>
      </div>

        <div v-show="open === 3" class="p-2.5 border border-[#C4C4C4]">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta exercitationem itaque quae architecto facere quo minima distinctio obcaecati fugiat expedita, natus molestias consequatur culpa soluta sapiente vitae. Ea, illum molestias.
          </p>

          <ul>
            <li>
              <a href="https://flowbite.com/pro/" target="_blank">Flowbite Pro</a>
            </li>
            <li>
              <a href="https://tailwindui.com/" target="_blank">Tailwind UI</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </main>
</template>





<style scoped>







button {
  width: 100%;
  padding: 12px;
  cursor: pointer;
  font-weight: bold;
}



</style>
