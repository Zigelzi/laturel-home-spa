<template>
  <div>
    <p>{{ building.building_name }}{{ apartment.apartment_number }}</p>
  </div>
</template>
<script>
export default {
  props: {
    building: Object,
    apartment: Object
  }
};
</script>
