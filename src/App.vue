<template>
  <div>
    <nav class="navbar">
      <router-link to="/">Hem</router-link>
      <router-link to="/projects">Projekt</router-link>
      <router-link to="/certifications">Certifikat</router-link>
      <router-link to="/Contacts">Kontakt</router-link>
    <a href="https://github.com/YasinElka/Portfolio" target="_blank" class="w3-bar-item w3-button w3-padding-large w3-right">
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style="height:30px;"></a>
    
    </nav>

    
 <router-view />
  </div>
</template>

<style scoped>
.navbar {
  background: hsl(210, 4%, 36%);
  padding: 15px;
}
.navbar a {
  color: whitesmoke;
  margin-right: 15px;
  text-decoration: none;
  font-weight: bold;
}
.navbar a.router-link-active {
  text-decoration: underline-color whitesmoke;
 
}

#foooter {
  background: hsl(210, 4%, 36%);
  color: whitesmoke;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>

