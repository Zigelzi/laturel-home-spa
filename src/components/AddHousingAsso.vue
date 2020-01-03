<template>
  <div class="container">
    <div class="row">
      <form action="">
        <div class="col">
          <h1>Lisää uusi taloyhtiö</h1>
          <TextInput :inputName="name" v-model="housingAssociation.name"
            >Taloyhtiön nimi</TextInput
          >
          <TextInput
            :inputName="businessId"
            v-model="housingAssociation.businessId"
            >Y-Tunnus</TextInput
          >
          <TextInput :inputName="street" v-model="housingAssociation.street"
            >Katu</TextInput
          >
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
          <TextInput
            :inputName="postalCode"
            v-model="housingAssociation.postalCode"
            >Postinumero</TextInput
          >
          <TextInput :inputName="city" v-model="housingAssociation.city"
            >Kaupunki</TextInput
          >
          <input
            type="submit"
            value="Lähetä"
            class="btn btn-primary"
            @click.prevent="onSubmit()"
          />
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
import TextInput from "@/components/TextInput";

export default {
  components: {
    TextInput
  },
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
