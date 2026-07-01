

<script setup>
import { ref } from 'vue'

const open = ref(1) // 1 ouvert par défaut

function toggle(id) {
  open.value = open.value === id ? null : id
}
</script>

<template>

    
 
  <main>

    <h1>Chapitre</h1>

    <div class="accordion">

      <!-- ITEM 1 -->
      <div class="item">
        <button @click="toggle(1)">
          Chapitre 1
        </button>

        <div v-show="open === 1" class="content">
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
      <div class="item">
        <button @click="toggle(2)">
          Chapitre 2
        </button>

        <div v-show="open === 2" class="content">
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
      <div class="item">
        <button @click="toggle(3)">
          Chapitre 3
        </button>

        <div v-show="open === 3" class="content">
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





<style scope>

@import "tailwindcss";

.title {
    display: flex;
    justify-content: center;
    text-transform: uppercase;

}

.accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  width: 100%;
  padding: 12px;
  cursor: pointer;
  font-weight: bold;
}

.content {
  padding: 10px;
  border: 1px solid #ddd;
}

</style>