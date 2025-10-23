<script setup>
import profileImage from '@/assets/Bild1.jpg'
</script>

<template>
  <section class="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gray-900 text-white">
    <!-- Profilbild -->
    <img
      :src="profileImage"
      alt="Yasin El Kawwash"
      class="w-50 h-50 sm:w-50 sm:h-40 rounded-full border-4 border-white/20 shadow-lg mb-6 object-cover"
     style="width: 15rem; height: 15rem;" 
/>
      

    <!-- Rubrik -->
    <h1 class="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
      Hej, jag är <span class="text-indigo-400">Yasin El Kawwash</span>
    </h1>

    <p class="text-xl sm:text-2xl text-blue-200 mb-6 font-light">
        Fullstack Developer | 30 år
      </p>

      <!-- Om mig sektion -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h3 class="text-lg font-semibold text-blue-400 mb-3">Lite om mig</h3>
          <p class="text-gray-300">
            Utöver mitt tekniska intresse värdesätter jag balans i livet. På fritiden umgås jag gärna 
            med vänner och familj, underhåller en aktiv livsstil genom träning och återhämtar mig 
            med fiske för att upprätthålla kreativitet och fokus.
          </p>
        </div>

    <!-- Undertext -->
    <p class="text-lg sm:text-xl max-w-xl text-gray-300 mb-8 leading-relaxed">
      Jag bygger moderna frontend- och backendlösningar med passion för kod, design och användarupplevelse.
    </p>


  
<!-- Teknologier med Progress -->
<div class="mb-10">
  <h3 class="text-lg font-semibold text-gray-400 mb-6 tracking-wide">TEKNISKA KOMPETENSER</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
    <!-- C# & .NET -->
    <div class="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
      <div class="flex items-center">
        <i class="fab fa-microsoft text-blue-400 text-xl mr-3"></i>
        <span class="font-medium text-white">C# & .NET</span>
      </div>
      <div class="w-20 bg-gray-700 rounded-full h-2">
        <div class="bg-blue-500 h-2 rounded-full" style="width: 90%"></div>
      </div>
    </div>

    <!-- JavaScript -->
    <div class="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-yellow-500/30 transition-all duration-300">
      <div class="flex items-center">
        <i class="fab fa-js-square text-yellow-400 text-xl mr-3"></i>
        <span class="font-medium text-white">JavaScript</span>
      </div>
      <div class="w-20 bg-gray-700 rounded-full h-2">
        <div class="bg-yellow-500 h-2 rounded-full" style="width: 85%"></div>
      </div>
    </div>

    <!-- Vue.js -->
    <div class="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300">
      <div class="flex items-center">
        <i class="fab fa-vuejs text-green-400 text-xl mr-3"></i>
        <span class="font-medium text-white">Vue.js</span>
      </div>
      <div class="w-20 bg-gray-700 rounded-full h-2">
        <div class="bg-green-500 h-2 rounded-full" style="width: 80%"></div>
      </div>
    </div>

    <!-- SQL -->
    <div class="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-red-500/30 transition-all duration-300">
      <div class="flex items-center">
        <i class="fas fa-database text-red-400 text-xl mr-3"></i>
        <span class="font-medium text-white">SQL</span>
      </div>
      <div class="w-20 bg-gray-700 rounded-full h-2">
        <div class="bg-red-500 h-2 rounded-full" style="width: 75%"></div>
      </div>
    </div>
  </div>
</div>
    
    

 <!-- Professionell CTA -->
      <div class="mb-12">
        <router-link 
          to="/projects" 
          class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
        >
          <i class="fas fa-rocket mr-3"></i>
          <span>Se Mina Projekt</span>
          <i class="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
        </router-link>
      </div>
   
   
   
     <footer class="footer">
      &copy; 2024 Yasin El Kawwash. Alla rättigheter förbehållna.
    </footer>
  </section>
</template>

<style scoped>



.footer {
  position: fixed; 
  left: 20px;
  bottom: 20px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  padding: 10px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 100;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.footer:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

@media (max-width: 10000px) {
  .footer {
    left: 5px;
    bottom: 5px;
    right: 5px;
    text-align: center;
  }
}
</style>





