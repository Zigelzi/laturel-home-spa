<template>
  <nav class="l-nav-container" id="l-nav-container">
    <h1 class="l-nav__title">Laturel Koti</h1>
    <ul class="l-nav-menu ">
      <div class="logged-in" v-if="auth">
        <router-link
          tag="li"
          class="l-nav__nav-item"
          :to="{ name: 'overview' }"
          exact
          ><div class="icon-m l-nav__nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M405.2 64h-21c15 5.7 22.8 20.6 22.8 42.7v298.7c0 22.1-7 37.3-22.8 42.7h21c23.7 0 42.8-19.2 42.8-42.7V106.7c0-23.5-19.1-42.7-42.8-42.7zM345.5 64.2c-1.4-.1-2.8-.2-4.2-.2H106.7C83.2 64 64 83.2 64 106.7v298.7c0 23.5 19.2 42.7 42.7 42.7h234.7c1.4 0 2.8-.1 4.2-.2 21.5-2.1 38.5-20.4 38.5-42.5V106.7c-.1-22.1-17.1-40.4-38.6-42.5zM208 256l-56-32-56 32V96h112v160z"
              />
            </svg>
          </div>
        </router-link>
        <router-link
          tag="li"
          class="l-nav__nav-item"
          :to="{ name: 'housingAssociation' }"
          ><div class="icon-m l-nav__nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M261 149.3V64H48v384h416V149.3H261zm-127.8 256H90.6v-42.7h42.6v42.7zm0-85.3H90.6v-42.7h42.6V320zm0-85.3H90.6V192h42.6v42.7zm0-85.4H90.6v-42.7h42.6v42.7zm85.2 256h-42.6v-42.7h42.6v42.7zm0-85.3h-42.6v-42.7h42.6V320zm0-85.3h-42.6V192h42.6v42.7zm0-85.4h-42.6v-42.7h42.6v42.7zm203 256H261v-42.7h42.6V320H261v-42.7h42.6v-42.7H261V192h160.4v213.3zm-37.6-170.6h-42.6v42.7h42.6v-42.7zm0 85.3h-42.6v42.7h42.6V320z"
              />
            </svg></div
        ></router-link>
        <router-link
          tag="li"
          class="l-nav__nav-item"
          :to="{ name: 'apartments' }"
          ><div class="icon-m l-nav__nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"
              />
            </svg></div
        ></router-link>
        <router-link tag="li" class="l-nav__nav-item" :to="{ name: 'service' }"
          ><div class="icon-m l-nav__nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M430.9 393.4l-119.6-119-58.1-57.9-13.4-13.3c15.9-40.6 7.1-88.2-26.6-121.7-35.4-35.3-88.5-42.3-131-22.9l76.1 75.8-53.1 52.9-77.9-75.8C6.2 153.8 15 206.7 50.4 242c33.6 33.5 81.4 42.3 122.1 26.5l14.4 14.3L81.7 388c-7.6 5.7-7.6 19 1.9 26.6l43.8 43.7c7.6 7.6 19.1 7.6 26.7 0l96.1-112.4 113.4 112.9c7.1 7.1 17.7 7.1 24.8 0l40.7-40.6c8.9-7.1 8.9-19.5 1.8-24.8z"
              />
              <path
                d="M494.4 216.6l-34.5-34.1c-2.2-2.2-5.8-2.2-8 0l-3.7 3.7-18.5-15.8s1.2-10-4.9-18.7c-6.2-8.7-16.1-19.8-23.2-26.9-7.1-7-34.1-33.9-69.7-51.4C296.2 55.7 271 48 241 48v29.7s28.7 16.6 45.1 29.7c16.3 13.1 16.8 59.5 16.8 59.5l-28.5 28.5 56.5 56.1 31-36.3c12.9-3.5 23.8-3.8 30.2-.3l13.7 13.3-9.6 9.5c-2.2 2.2-2.2 5.7 0 7.9l34.5 34.1c2.2 2.2 5.8 2.2 8 0l55.7-55.2c2.1-2.2 2.1-5.8 0-7.9z"
              />
            </svg></div
        ></router-link>
        <router-link
          tag="li"
          class="l-nav__nav-item"
          :to="{ name: 'communication' }"
          ><div class="icon-m l-nav__nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"
              />
            </svg></div
        ></router-link>
        <router-link tag="li" class="l-nav__nav-item" :to="{ name: 'settings' }"
          ><div class="icon-m l-nav__nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M480 288v-64h-34.7c-2-12.1-5.2-23.8-9.3-35l30-17.3-32-55.4-30 17.3c-7.7-9.3-16.3-17.9-25.6-25.6l17.3-30-55.4-32L323 76c-11.2-4.2-22.9-7.3-35-9.3V32h-64v34.7c-12.1 2-23.8 5.2-35 9.3l-17.3-30-55.4 32 17.3 30c-9.3 7.7-17.9 16.3-25.6 25.6l-30-17.3-32 55.4L76 189c-4.2 11.2-7.3 22.9-9.3 35H32v64h34.7c2 12.1 5.2 23.8 9.3 35l-30 17.3 32 55.4 30-17.3c7.7 9.3 16.3 17.9 25.6 25.6l-17.3 30 55.4 32 17.3-30c11.2 4.2 22.9 7.3 35 9.3V480h64v-34.7c12.1-2 23.8-5.2 35-9.3l17.3 30 55.4-32-17.3-30c9.3-7.7 17.9-16.3 25.6-25.6l30 17.3 32-55.4-30-17.3c4.2-11.2 7.3-22.9 9.3-35H480zm-224-64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM141.2 343c-18.3-24.2-29.2-54.3-29.2-87 0-6.1.4-12.1 1.1-18l46.9 17.1v.9c0 17.8 4.9 34.5 13.3 48.8L141.2 343zm40.7-148L135 177.9c20.1-31.1 51.8-53.9 89-62.3v49.9c-16.6 5.9-31.1 16.2-42.1 29.5zM256 400c-23.7 0-46-5.7-65.8-15.9l32.1-38.2c10.5 3.9 21.8 6.1 33.7 6.1s23.2-2.2 33.7-6.1l32.1 38.2C302 394.3 279.7 400 256 400zm32-234.5v-49.9c37.2 8.4 68.9 31.2 89 62.3L330.1 195c-11-13.3-25.5-23.6-42.1-29.5zM370.8 343l-32.1-38.2c8.4-14.3 13.3-31 13.3-48.8v-.9l46.9-17.1c.7 5.9 1.1 11.9 1.1 18 0 32.7-10.9 62.8-29.2 87z"
              />
            </svg></div
        ></router-link>
      </div>
      <div class="not-logged-in" v-if="!auth">
        <router-link tag="li" class="l-nav__nav-item" :to="{ name: 'login' }"
          ><div class="icon-m l-nav__nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M249.2 224c-14.2-40.2-55.1-72-100.2-72-57.2 0-101 46.8-101 104s45.8 104 103 104c45.1 0 84.1-31.8 98.2-72H352v64h69.1v-64H464v-64H249.2zm-97.6 66.5c-19 0-34.5-15.5-34.5-34.5s15.5-34.5 34.5-34.5 34.5 15.5 34.5 34.5-15.5 34.5-34.5 34.5z"
              />
            </svg></div
        ></router-link>
        <router-link
          tag="li"
          class="l-nav__nav-item"
          :to="{ name: 'createAccount' }"
          ><div class="icon-m l-nav__nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M304 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96zM112 224v-64H80v64H16v32h64v64h32v-64h64v-32h-64z"
              />
            </svg></div
        ></router-link>
      </div>
    </ul>
    <div class="l-nav-bottom">
      <button class="btn btn-danger" @click="onLogout" v-if="auth">
        Log out
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>
