<template>
  <div>
    <TopNav />
    <h1 class="content-title">Huoltotiedot</h1>
    <div class="cards-container">
      <div v-for="(repair, index) in repairs" :key="index" class="laturel-card">
        <h4>{{ repair.description }}</h4>
        <p>Kategoria: {{ repair.repair_category.name }}</p>
        <p>Valmistumispäivämäärä: {{ repair.repair_date }}</p>
      </div>
    </div>

    <router-view class="router-container"></router-view>
  </div>
</template>
<script>
import axios from "axios";
import TopNav from "@/components/navigation/TopNav";

export default {
  components: { TopNav },
  data() {
    return {
      user: this.$store.state.user,
      repairs: []
    };
  },
  methods: {
    getServices() {
      const path = "/ha/repair/";
      axios
        .get(path + this.user.housing_association.id)
        .then(res => {
          this.repairs = res.data.repairs;
        })
        .catch(error => {
          //eslint-disable-next-line
          console.error(error)
        });
    }
  },
  created() {
    this.getServices();
  }
};
</script>
