<template>
  <div class="row">
    <div class="container">
      <form action="" class="form-container">
        <div class="col">
          <TextInput inputName="userName" v-model="user.name">Nimi</TextInput>
          <EmailInput inputName="email" v-model="user.email"
            >Sähköposti</EmailInput
          >
          <input type="button" value="Lähetä" @click="onSubmit()" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import TextInput from "@/components/inputs/TextInput";
import EmailInput from "@/components/inputs/EmailInput";

export default {
  components: {
    TextInput,
    EmailInput
  },
  data() {
    return {
      user: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    addUser(payload) {
      // Sending form data to API to be added into DB
      const path = "/users/";
      return axios
        .post(path, payload)
        .then(res => {
          if (res.data) {
            this.$store.commit("updateShowBackendMessage", true);
            this.$store.commit("updateBackendMessage", {
              message: res.data.message,
              status: res.data.status
            });
          }
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
      const payload = { ...this.user };
      this.addUser(payload);
    }
  }
};
</script>
