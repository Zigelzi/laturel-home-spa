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
  data() {
    return {
      categories: [],
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
    getCategories() {
      // Get the categories from backend to be listed on tabs
      const path = "/ha/repair_category";
      axios
        .get(path)
        .then(res => {
          this.categories = res.data.repairCategories;
        })
        .catch(error => {
          //eslint-disable-next-line
        console.error(error)
        });
    },
    removeCategory(categoryId) {
      //eslint-disable-next-line
      console.log(categoryId)
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
  },
  created() {
    this.getCategories();
  }
};
</script>
