<template>
  <div>
    <h1 class="content-title">Huoneistot</h1>
    <div>
      <Building
        v-for="(building, index) in user.housing_association.buildings"
        :key="index"
        :building="building"
      />
    </div>
  </div>
</template>

<script>
import Building from "@/components/apartments/Building";

export default {
  components: {
    Building
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
