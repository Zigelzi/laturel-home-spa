<template>
  <div id="home" class="">
    <HousingAssociation
      v-for="(ha, index) in housingAssociations"
      :key="index"
      :housingAssociation="ha"
      @haDelete="updateHousingAssociations($event)"
    />
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import HousingAssociation from "@/components/HousingAssociation";

export default {
  name: "home",
  components: {
    HousingAssociation
  },
  data() {
    return {
      housingAssociations: []
    };
  },
  methods: {
    getHousingAssociations() {
      // Get the existing housing associations from the database and add them to the data property
      const path = "/ha/get_all";
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
    },
    updateHousingAssociations(response) {
      this.getHousingAssociations();
      this.response = response;
      this.showMessage = true;
    }
  },
  created() {
    this.getHousingAssociations();
  }
};
</script>
