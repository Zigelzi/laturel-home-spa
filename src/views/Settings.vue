<template>
  <div>
    <Message
      v-if="showMessage"
      :response="response"
      @messageCleared="resetResponse()"
    />
    <div class="messages" v-if="showMessage">
      <p>Status: {{ response.status }}</p>
      <p>Message: {{ response.message }}</p>
      <button class="btn btn-primary" @click="hideMessage()">
        Clear
      </button>
    </div>
    <AddHousingAsso @haAdd="updateMessages($event)" />
  </div>
</template>

<script>
import AddHousingAsso from "@/components/AddHousingAsso";
import Message from "@/components/Message";

export default {
  components: {
    AddHousingAsso,
    Message
  },
  data() {
    return {
      response: {},
      showMessage: false
    };
  },
  methods: {
    updateMessages(response) {
      this.response = response;
      this.showMessage = true;
    },
    resetResponse() {
      this.response = {};
      this.showMessage = false;
    }
  }
};
</script>
