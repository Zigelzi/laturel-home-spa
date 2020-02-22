<template>
  <div>
    <TopNav />
    <h1 class="content-title">Huoltotiedot</h1>
    <router-view></router-view>
    <div v-for="(repair, index) in repairs" :key="index">
      <h4>{{ repair.description }}</h4>
      <p>Kategoria: {{ repair.repair_category.name }}</p>
      <p>Valmistumispäivämäärä: {{ repair.repair_date }}</p>
    </div>
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
