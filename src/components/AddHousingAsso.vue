<template>
  <div class="container">
    <div class="row">
      <form action="">
        <div class="col">
          <h1>Lisää uusi taloyhtiö</h1>
          <div class="form-group">
            <label for="name">Taloyhtiön nimi</label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              v-model="housingAssociation.name"
            />
          </div>
          <div class="form-group">
            <label for="businessId">Y-tunnus</label>
            <input
              type="text"
              name=""
              id="businessId"
              class="form-control"
              v-model="housingAssociation.businessId"
            />
          </div>
          <div class="form-group">
            <label for="street">Katu</label>
            <input
              type="text"
              name="street"
              id="street"
              class="form-control"
              v-model="housingAssociation.street"
            />
          </div>
          <div class="form-group">
            <label for="streetNumber">Kadun numero</label>
            <input
              type="text"
              name="streetNumber"
              id="streetNumber"
              class="form-control"
              v-model="housingAssociation.streetNumber"
            />
          </div>
          <div class="form-group">
            <label for="postalCode">Postinumero</label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              class="form-control"
              v-model="housingAssociation.postalCode"
            />
          </div>
          <div class="form-group">
            <label for="city">Kaupunki</label>
            <input
              type="text"
              name="city"
              id="city"
              class="form-control"
              v-model="housingAssociation.city"
            />
            <input
              type="submit"
              value="Lähetä"
              class="btn btn-primary"
              @click.prevent="onSubmit()"
            />
          </div>
        </div>
      </form>
      <div v-if="submitResponse.show">
        <p>Message: {{ submitResponse.message }}</p>
        <p>Status: {{ submitResponse.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      housingAssociation: {
        name: "",
        businessId: "",
        street: "",
        streetNumber: "",
        postalCode: "",
        city: ""
      },
      submitResponse: {
        message: "",
        status: "",
        show: false
      }
    };
  },
  methods: {
    initForm() {
      this.housingAssociation.name = "";
      this.housingAssociation.businessId = "";
      this.housingAssociation.street = "";
      this.housingAssociation.streetNumber = "";
      this.housingAssociation.postalCode = "";
      this.housingAssociation.city = "";
    },
    addHousingAssociation(payload) {
      const path = "http://localhost:5000/housing_associations";
      axios
        .post(path, payload)
        .then(res => {
          this.$emit("haAdded");

          this.submitResponse.message = res.data.message;
          this.submitResponse.status = res.data.status;
          this.submitResponse.show = true;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    onSubmit() {
      const payload = {
        name: this.housingAssociation.name,
        businessId: this.housingAssociation.businessId,
        street: this.housingAssociation.street,
        streetNumber: this.housingAssociation.streetNumber,
        postalCode: this.housingAssociation.postalCode,
        city: this.housingAssociation.city
      };
      this.addHousingAssociation(payload);
    }
  }
};
</script>
