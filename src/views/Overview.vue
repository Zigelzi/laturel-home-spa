<template>
  <div>
    <h1 class="content-title">{{ user.housing_association.name }}</h1>
    <p>Tervetuloa Kotiin {{ user.name }}!</p>
    <div v-if="!user.auth_token">
      <p>Kirjaudu sisään tai luo uusi tili jatkaaksesi</p>
    </div>
    <div v-else>
      <h3>Yleistiedot</h3>
      <p>Y-tunnus: {{ user.housing_association.business_id }}</p>
      <p>
        Osoite: {{ user.housing_association.street }}
        {{ user.housing_association.street_number }},
        {{ user.housing_association.postal_code }}
        {{ user.housing_association.city }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
