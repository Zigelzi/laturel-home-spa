<template>
  <div class="building-card">
    <h3>{{ building.building_name }}-rakennus</h3>
    <Apartment
      v-for="(apartment, index) in building.apartments"
      :key="index"
      :building="building"
      :apartment="apartment"
    />
  </div>
</template>
<script>
import Apartment from "@/components/Apartment";

export default {
  components: {
    Apartment
  },
  props: {
    building: Object
  }
};
</script>
