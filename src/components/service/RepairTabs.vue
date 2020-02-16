<template>
  <div>
    <h4>Korjauskategoriat</h4>
    <div class="tabs-container">
      <ul class="tabs-menu">
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="tab"
          :class="{ tab__active: isActive(category.name) }"
          @click="setActive(category.name)"
        >
          <a :href="'#' + category.name">
            {{ category.name }}
          </a>
        </li>
      </ul>
      <div class="tabs-content">
        <div class="tab-pane">
          {{ activeTab.description }}
        </div>
        <button class="btn btn-danger" @click="removeCategory(activeTab.id)">
          Poista
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: {
    categories: Array
  },
  data() {
    return {
      activeItem: "Katto"
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    removeCategory(categoryId) {
      const path = "/ha/repair_category/";
      axios
        .delete(path + categoryId)
        .then(res => {
          this.$store.commit("updateBackendMessage", {
            message: res.data.message,
            status: res.data.status
          });
          this.$store.commit("updateShowBackendMessage", true);
          this.$emit("categoryDeleted");
          this.activeItem = this.categories[0].name;
        })
        .catch(error => {
          //eslint-disable-next-line
          console.error(error);
          this.$store.commit("updateBackendMessage", {
            message: error.response.data.message,
            status: error.response.data.status
          });
          this.$store.commit("updateShowBackendMessage", true);
        });
    }
  },
  computed: {
    activeTab() {
      // Filter the tabs array to match currently selected item from the tabs
      let activeTab = [];
      if (this.categories.length != 0) {
        // Only filter the categories when it has items to filter.
        // Categories is initialized as empty array and only receives items after the backend call responds.
        activeTab = this.categories.filter(
          tab => tab.name === this.activeItem
        )[0];
      }
      return activeTab;
    }
  }
};
</script>
