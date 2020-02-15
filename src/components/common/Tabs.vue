<template>
  <div>
    <div>
      <ul class="tabs-menu">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab"
          :class="{ tab__active: isActive(tab.name) }"
        >
          <a :href="'#' + tab.name" @click="setActive(tab.name)">
            {{ tab.name }}
          </a>
        </li>
      </ul>
      <div class="tabs-content">
        <div class="tab-pane">
          {{ activeTab.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabs: Array
  },
  data() {
    return {
      activeItem: this.tabs[0].name
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    }
  },
  computed: {
    activeTab() {
      // Filter the tabs array to match currently selected item from the tabs
      return this.tabs.filter(tab => tab.name === this.activeItem)[0];
    }
  }
};
</script>
