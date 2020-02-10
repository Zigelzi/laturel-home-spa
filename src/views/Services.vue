<template>
  <div>
    <h1 class="content-title">Huoltotiedot</h1>
    <p>Tähän tulee huoltoon liittyvät asiat</p>
    <Tabs :tabs="tabs" />
  </div>
</template>
<script>
import Tabs from "@/components/general/Tabs";
export default {
  components: {
    Tabs
  },
  data() {
    return {
      activeItem: "createCategory",
      tabs: [
        {
          title: "Luo kategorioita",
          activeName: "createCategory",
          content: "Luo kategoria sisältö",
          link: "#luo_kategorioita"
        },
        {
          title: "Luo remontti",
          activeName: "createService",
          content: "Luo remontti sisältö",
          link: "#luo_remontti"
        }
      ]
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    }
  }
};
</script>
