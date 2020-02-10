<template>
  <div>
    <div>
      <ul class="tabs-menu">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab"
          :class="{ tab__active: isActive(tab.activeName) }"
        >
          <a :href="tab.link" @click="setActive(tab.activeName)">
            {{ tab.title }}
          </a>
        </li>
      </ul>
      <div class="tabs-content">
        <div class="tab-pane">
          {{ activeTab.content }}
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
      activeItem: this.tabs[0].activeName
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
      return this.tabs.filter(tab => tab.activeName === this.activeItem)[0];
    }
  }
};
</script>
