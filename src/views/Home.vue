<template>
  <div>
    <h1 class="content-title">Tervetuloa Kotiin!</h1>
    <div v-if="!user.auth_token">
      <p>Kirjaudu sisään tai luo uusi tili jatkaaksesi</p>
    </div>
    <div v-else>
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
      <p>Taloyhtiö: {{ user.housing_association.name }}</p>
      <p>Y-tunnus: {{ user.housing_association.business_id }}</p>
      <p>
        Osoite: {{ user.housing_association.street }}
        {{ user.housing_association.street_number }},
        {{ user.housing_association.postal_code }}
        {{ user.housing_association.city }}
      </p>
      <div>
        <Building
          v-for="(building, index) in user.housing_association.buildings"
          :key="index"
          :building="building"
        />
      </div>
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
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
