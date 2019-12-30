<template>
  <div id="home" class="">
    <AddHousingAsso @haAdded="getHousingAssociations()" />
    <HousingAssociation
      v-for="(ha, index) in housingAssociations"
      :key="index"
      :housingAssociation="ha"
    />
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import HousingAssociation from "@/components/HousingAssociation.vue";
import AddHousingAsso from "@/components/AddHousingAsso.vue";

export default {
  name: "home",
  data() {
    return {
      housingAssociations: []
    };
  },
  methods: {
    getHousingAssociations() {
      // Get the existing housing associations from the database and add them to the data property
      const path = "http://localhost:5000/housing_associations";
      axios
        .get(path)
        .then(res => {
          // On successful response add the retrieved data to housingAssociations array
          this.housingAssociations = res.data.housingAssociations;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error)
        });
    }
  },
  components: {
    HousingAssociation,
    AddHousingAsso
  },
  created() {
    this.getHousingAssociations();
  }
};
</script>
