<template>
  <div class="container">
    <div class="row">
      <form action="">
        <div class="col">
          <h1>Lisää uusi taloyhtiö</h1>
          <TextInput inputName="name" v-model="housingAssociation.name"
            >Taloyhtiön nimi</TextInput
          >
          <TextInput
            inputName="businessId"
            v-model="housingAssociation.businessId"
            >Y-Tunnus</TextInput
          >
          <TextInput inputName="street" v-model="housingAssociation.street"
            >Katu</TextInput
          >
          <NumberInput
            inputName="streetNumber"
            v-model="housingAssociation.streetNumber"
            >Kadun numero</NumberInput
          >
          <TextInput
            inputName="postalCode"
            v-model="housingAssociation.postalCode"
            >Postinumero</TextInput
          >
          <TextInput inputName="city" v-model="housingAssociation.city"
            >Kaupunki</TextInput
          >
          <NumberInput
            @input="createAlphabet(buildings.count)"
            inputName="buildingCount"
            v-model="buildings.count"
            >Kuinka monta asuntoa taloyhtiössä on?</NumberInput
          >

          <div
            v-for="(building, index) in buildings.buildingArray"
            :key="index"
          >
            Rakennus {{ building.buildingLetter }}
            <NumberInput
              :inputName="apartmentCount"
              v-model="building.apartmentCount"
              >Asuntoja</NumberInput
            >
          </div>
          <input
            type="submit"
            value="Lähetä"
            class="btn btn-primary"
            @click.prevent="onSubmit()"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TextInput from "@/components/TextInput";
import NumberInput from "@/components/NumberInput";

export default {
  components: {
    TextInput,
    NumberInput
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
      buildings: {
        count: null,
        buildingArray: []
      }
    };
  },
  methods: {
    initForm() {
      // Initialize the form with empty values
      this.housingAssociation.name = "";
      this.housingAssociation.businessId = "";
      this.housingAssociation.street = "";
      this.housingAssociation.streetNumber = "";
      this.housingAssociation.postalCode = "";
      this.housingAssociation.city = "";
    },
    addHousingAssociation(payload) {
      // Sending form data to API to be added into DB
      const path = "/ha/get_all";
      return axios
        .post(path, payload)
        .then(res => {
          this.$emit("haAdd", res.data);
          if (res.data.status == "success") {
            return true;
          } else {
            return false;
          }
        })
        .catch(error => {
          // eslint-disable-next-line
            console.error(error);
        });
    },
    onSubmit() {
      // Create payload object from form data
      const payload = {
        name: this.housingAssociation.name,
        businessId: this.housingAssociation.businessId,
        street: this.housingAssociation.street,
        streetNumber: this.housingAssociation.streetNumber,
        postalCode: this.housingAssociation.postalCode,
        city: this.housingAssociation.city
      };
      this.addHousingAssociation(payload).then(success => {
        // Check if the backend replies with status: success and if it does, clear the form.
        if (success) {
          this.initForm();
        }
      });
    },
    createAlphabet(count) {
      // Create the amount of letters of alphabet for buildings names
      const buildingArray = [];
      let i = 0;
      if (count <= 26) {
        for (i = 0; i < count; i++) {
          let character = (i + 10).toString(36);
          character = character.toUpperCase();
          buildingArray.push({ buildingLetter: character, apartmentCount: 0 });
        }
        this.buildings.buildingArray = [...buildingArray];
      }
    }
  }
};
</script>
