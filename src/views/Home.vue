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
  </div>
</template>

<script>
export default {
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
