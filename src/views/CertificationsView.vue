<template>
  <div class="portfolio-container">
    <!-- Titel för certifikaten -->
    <h2>Certifikat:</h2>

    <!-- Lista över certifikat -->
    <ul>
      <!-- Loopar genom certifikatlistan och visar varje certifikat som en klickbar länk -->
      <li v-for="cert in certifikatLista" :key="cert.id">
        <a href="#" @click.prevent="visaCertifikat(cert.bild)">
          📄 {{ cert.namn }}
        </a>
      </li>
    </ul>

    <!-- Modal-fönster som visas när ett certifikat klickas -->
    <div v-if="certifikatBild" class="modal-overlay" @click.self="certifikatBild = null">
      <div class="modal-content">
        <img :src="certifikatBild" class="stor-certifikat" alt="Certifikat" />
        <button @click="certifikatBild = null">Stäng</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CertificationsView',
  data() {
    return {
      certifikatBild: null, // Håller aktuell bild som ska visas i modalen
      certifikatLista: [
        {
          id: 1,
          namn: 'Grundläggande programmering', // Namn som visas i listan
          bild: require('@/assets/certifikat-Yasin-elkawwash-grundlaggande-programmering.png') // Bildsökväg
        },
        // Lägg till fler certifikat här vid behov
      ]
    };
  },
  methods: {
    // Visar valt certifikat i modal
    visaCertifikat(bild) {
      this.certifikatBild = bild;
    }
  }
};
</script>

<style scoped>
/* Behållare för hela sidan */
.portfolio-container {
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  background: #f9f9f9;
  border-radius: 10px;
}

/* Rubriken */
h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Lista utan punkter */
ul {
  list-style: none;
  padding: 0;
}

/* Mellanrum mellan certifikat-länkarna */
li {
  margin-bottom: 1rem;
}

/* Stil för klickbar länk */
a {
  color: #42b983;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

/* Modal-overlay – gråtonad bakgrund bakom bilden */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

/* Själva modal-rutan */
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

/* Bild i modalen */
.stor-certifikat {
  max-width: 80vw;
  max-height: 80vh;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* Stäng-knapp */
button {
  background: #42b983;
  border: none;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #36906d;
}
</style>
