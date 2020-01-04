<template>
  <div id="home" class="">
    <Message
      v-if="showMessage"
      :response="response"
      @messageCleared="resetResponseMessage()"
    />
    <HousingAssociation
      v-for="(ha, index) in housingAssociations"
      :key="index"
      :housingAssociation="ha"
      @haDelete="updateHousingAssociations($event)"
    />
    {{ housingAssociations }}
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import HousingAssociation from "@/components/HousingAssociation";
import Message from "@/components/Message";

export default {
  name: "home",
  components: {
    HousingAssociation,
    Message
  },
  data() {
    return {
      housingAssociations: [],
      response: {},
      showMessage: false
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
    },
    resetResponseMessage() {
      this.response = {};
      this.showMessage = false;
    }
  },
  created() {
    this.getHousingAssociations();
  }
};
</script>
