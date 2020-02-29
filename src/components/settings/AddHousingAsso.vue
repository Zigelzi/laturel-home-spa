<template>
  <div class="container">
    <div class="row">
      <form action="" class="form-container">
        <div class="col">
          <h1>Lisää uusi taloyhtiö</h1>
          <TextInput inputName="name" v-model="housingAssociation.name"
            >Taloyhtiön nimi</TextInput
          >
          <TextInput
            inputName="business_id"
            v-model="housingAssociation.business_id"
            >Y-Tunnus</TextInput
          >
          <TextInput inputName="street" v-model="housingAssociation.street"
            >Katu</TextInput
          >
          <NumberInput
            inputName="street_number"
            v-model="housingAssociation.street_number"
            >Kadun numero</NumberInput
          >
          <TextInput
            inputName="postal_code"
            v-model="housingAssociation.postal_code"
            >Postinumero</TextInput
          >
          <TextInput inputName="city" v-model="housingAssociation.city"
            >Kaupunki</TextInput
          >
          <NumberInput
            @input="createAlphabet(building_count)"
            inputName="building_count"
            v-model="building_count"
            >Kuinka monta asuntoa taloyhtiössä on?</NumberInput
          >
          <div
            v-for="(building, index) in housingAssociation.buildings"
            :key="index"
          >
            Rakennus {{ building.building_name }}
            <NumberInput
              :inputName="apartment_count"
              v-model="building.apartment_count"
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
import TextInput from "@/components/inputs/TextInput";
import NumberInput from "@/components/inputs/NumberInput";

export default {
  components: {
    TextInput,
    NumberInput
  },
  data() {
    return {
      housingAssociation: {
        name: "",
        business_id: "",
        street: "",
        street_number: "",
        postal_code: "",
        city: "",
        buildings: []
      },
      building_count: null
    };
  },
  methods: {
    initForm() {
      // Initialize the form with empty values
      this.housingAssociation.name = "";
      this.housingAssociation.business_id = "";
      this.housingAssociation.street = "";
      this.housingAssociation.street_number = "";
      this.housingAssociation.postal_code = "";
      this.housingAssociation.city = "";
      this.housingAssociation.buildings = [];
      this.building_count = null;
    },
    addHousingAssociation(payload) {
      // Sending form data to API to be added into DB
      const path = "/ha/add";
      return axios
        .post(path, payload)
        .then(res => {
          if (res.data) {
            this.$store.commit("updateBackendMessage", {
              message: res.data.message,
              status: res.data.status
            });
          }
          if (res.data.status == "success") {
            // Return true if submission was successful so promise can be chained to reset the form on success.
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
      const payload = { ...this.housingAssociation };
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
          buildingArray.push({
            building_name: character,
            apartment_count: 0
          });
        }
        // eslint-disable-next-line
        console.log(buildingArray);
        this.housingAssociation.buildings = [...buildingArray];
      }
    }
  }
};
</script>
