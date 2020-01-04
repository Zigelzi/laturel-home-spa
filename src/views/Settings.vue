<template>
  <div>
    <Message
      v-if="showMessage"
      :response="response"
      @messageCleared="resetResponseMessage()"
    />
    <AddHousingAsso @haAdd="updateMessages($event)" />
    <AddUser @userAdd="updateMessages($event)" />
  </div>
</template>

<script>
import AddHousingAsso from "@/components/AddHousingAsso";
import Message from "@/components/Message";
import AddUser from "@/components/AddUser";

export default {
  components: {
    AddHousingAsso,
    Message,
    AddUser
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
    resetResponseMessage() {
      this.response = {};
      this.showMessage = false;
    }
  }
};
</script>
