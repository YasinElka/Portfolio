<template>
  <!-- Huvudcontainer med padding och ljus bakgrund -->
  <div class="p-8 min-h-screen bg-gray-50 text-gray-800">

    <!-- Rubrik för sektionen -->
    <h2 class="text-3xl font-bold mb-6">Mina Projekt</h2>

    <!-- Lista över projekt -->
    <ul class="space-y-3">
      <li v-for="project in projects" :key="project.id">
        <!-- Knapp som visar projektbild i modal vid klick -->
        <button
          @click="visaProjektBild(project.bild)"
          class="text-blue-600 hover:underline hover:text-blue-800 font-medium"
        >
          📸 {{ project.namn }}
        </button>
      </li> 
    </ul>

    <!-- Modal för att visa vald projektbild -->
    <div
      v-if="projektBild"  
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg max-w-2xl w-full relative shadow-lg">
        <!-- Själva bilden -->
        <img
          :src="projektBild"
          alt="Projektbild"
          class="max-h-[40vh] w-auto mx-auto mb-4 rounded shadow"
        />
        <!-- Stäng-knapp (×) -->
        <button
          @click="projektBild = null"
          class="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Lokal komponentdata
  data() {
    return {
      // Bild som ska visas i modalen (null = ingen bild visas)
      projektBild: null,

      // Lista över projekt med namn och bild
      projects: [
        {
          id: 1,
          namn: 'Webbapp för tidrapportering för anställda byggd på ett MVC-ramverk',
          bild: require('@/assets/Skärmdump2.png'),
        },
        {
          id: 2,
          namn: 'En view av registrering av anställda/(Mvc-ramverk)',
          bild: require('@/assets/Skärmdump1.png'),
        },
        {
          id: 3,
          namn: 'En view av tidrapportering(Mvc-ramverk)',
          bild: require('@/assets/Skärmdump3.png'),
        },
        {
          id: 4,
          namn: 'En view av kod från ett konsol program (C#)',
          bild: require('@/assets/FizzBuzz.png'),
        },
        {
          id: 5,
          namn: 'En view av resultatet från ett konsol program(C#)',
          bild: require('@/assets/FizzBuzz1.png'),
        },
        {
          id: 6,
          namn: 'En view av kod från mitt TicTacToe spel(C#)',
          bild: require('@/assets/TicTacToe1.png'),
        },
        {
          id: 7,
          namn: 'TicTacToe spel(C#)',
          bild: require('@/assets/TicTacToe.png'),
        },
        {
          id: 8,
          namn: 'ASP.NET CORE WEB API(C#)',
          bild: require('@/assets/BooksAPI-Kod.png'),
        },
        {
          id: 9,
          namn: 'ASP.NET CORE WEB API(C#)',
          bild: require('@/assets/BooksAPI.png'),
        },
        {
          id: 10,
          namn: 'ASP.NET CORE WEB API(C#)',
          bild: require('@/assets/BooksAPI1.png'),
        },
      ],
    };
  },
  methods: {
    // Funktion som sätter vald bild i "projektBild" för att visa i modalen
    visaProjektBild(bild) {
      this.projektBild = bild;
    },
  },
};
</script>


<style scoped>
</style>




























