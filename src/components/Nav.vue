<template>
  <nav class="l-nav-container" id="l-nav-container">
    <h1 class="l-nav__title">Laturel Koti</h1>
    <ul class="l-nav-menu ">
      <div class="logged-in" v-if="auth">
        <li class="l-nav__nav-item">
          <router-link :to="{ name: 'home' }">Yleiskatsaus</router-link>
        </li>
        <li class="l-nav__nav-item">
          <router-link :to="{ name: 'settings' }">Asetukset</router-link>
        </li>
      </div>
      <div class="not-logged-in" v-if="!auth">
        <li class="l-nav__nav-item">
          <router-link :to="{ name: 'login' }">Kirjaudu sisään</router-link>
        </li>
        <li class="l-nav__nav-item">
          <router-link :to="{ name: 'createAccount' }">Luo tili</router-link>
        </li>
      </div>
    </ul>
    <div class="l-nav-bottom">
      <button class="btn btn-danger" @click="onLogout" v-if="auth">
        Log out
      </button>
      <!-- eslint-disable-next-line -->
      <div class="l-nav__nav-close" @click="toggleNav"><<<</div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleNav() {
      const navContainer = document.getElementById("l-nav-container");
      navContainer.classList.toggle("l-nav__nav--minimized");
    },
    onLogout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    userData() {
      return this.$store.getters.getUserData;
    }
  }
};
</script>
