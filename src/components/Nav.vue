<template>
  <nav class="l-nav-container" id="l-nav-container">
    <h1 class="l-nav__title">Laturel Koti</h1>
    <ul class="l-nav-menu ">
      <li class="l-nav__nav-item">
        <router-link :to="{ name: 'home' }">Yleiskatsaus</router-link>
      </li>
      <li class="l-nav__nav-item">
        <router-link :to="{ name: 'settings' }">Asetukset</router-link>
      </li>
      <li class="l-nav__nav-item">
        <router-link :to="{ name: 'login' }">Kirjaudu sisään</router-link>
      </li>
      <li class="l-nav__nav-item">
        <router-link :to="{ name: 'createAccount' }">Luo tili</router-link>
      </li>
    </ul>
    <!-- eslint-disable-next-line -->
    <div class="l-nav__nav-close" @click="toggleNav"><<<</div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleNav() {
      const navContainer = document.getElementById("l-nav-container");
      navContainer.classList.toggle("l-nav__nav--minimized");
    }
  }
};
</script>
