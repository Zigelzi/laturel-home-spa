<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card house-association">
          <div class="card-body">
            <h1 class="card-title">{{ housingAssociation.name }}</h1>
            <p class="card-text">{{ housingAssociation.business_id }}</p>
            <p class="card-text">
              {{ housingAssociation.street }}
              {{ housingAssociation.street_number }},
              {{ housingAssociation.postal_code }} {{ housingAssociation.city }}
            </p>
            <button class="btn btn-danger" @click="deleteHousingAssociation()">
              Poista
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    housingAssociation: Object
  },
  methods: {
    deleteHousingAssociation() {
      // Delete the selected housing association.
      const path = "/ha/";
      axios
        .delete(path + this.housingAssociation.id)
        .then(res => {
          this.$emit("haDelete", res.data);
        })
        .catch(error => {
          //eslint-disable-next-line
          console.error(error);
          this.$emit("haDelete");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.house-association {
  background: #fefefe;
  max-width: 400px;
  margin-bottom: 10px;
}
</style>
