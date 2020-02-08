<template>
  <div>
    <h1 class="content-title">Tervetuloa Kotiin!</h1>
    <p>{{ userData.name }}</p>
    <p>{{ userData.email }}</p>
    <p>Taloyhtiö: {{ userData.housing_association.name }}</p>
    <p>Y-tunnus: {{ userData.housing_association.business_id }}</p>
    <p>
      Osoite: {{ userData.housing_association.street }}
      {{ userData.housing_association.street_number }},
      {{ userData.housing_association.postal_code }}
      {{ userData.housing_association.city }}
    </p>
    <div>
      <Building
        v-for="(building, index) in userData.housing_association.buildings"
        :key="index"
        :building="building"
      />
    </div>
  </div>
</template>

<script>
import Building from "@/components/Building";

export default {
  components: {
    Building
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    userData() {
      return this.$store.state.userData;
    }
  }
};
</script>
