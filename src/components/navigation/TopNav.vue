<template>
  <div class="top-nav__container">
    <router-link
      class="top-nav__nav-item"
      tag="li"
      :to="{ name: 'createRepair' }"
      >Luo korjaus</router-link
    >
    <router-link
      class="top-nav__nav-item"
      tag="li"
      :to="{ name: 'repairCategories' }"
      >Luo kategoria</router-link
    >
  </div>
</template>
