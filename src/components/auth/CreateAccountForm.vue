<template>
  <div>
    <h1 class="content-title">
      Rekisteröidy Laturel Kotiin
    </h1>
    <p class="form-error">{{ formError }}</p>
    <form action="">
      <TextInput inputName="userName" v-model="formData.name">Nimi</TextInput>
      <EmailInput inputName="userEmail" v-model="formData.email"
        >Sähköposti</EmailInput
      >
      <PasswordInput inputName="userPassword" v-model="formData.password">
        Salasana</PasswordInput
      >
      <PasswordInput
        inputName="confirmPassword"
        v-model="formData.confirmPassword"
      >
        Vahvista salasana
      </PasswordInput>
      <input
        class="btn btn-primary"
        type="submit"
        value="Rekisteröidy"
        @click.prevent="onSubmit"
      />
    </form>
  </div>
</template>

<script>
import TextInput from "@/components/inputs/TextInput";
import EmailInput from "@/components/inputs/EmailInput";
import PasswordInput from "@/components/inputs/PasswordInput";

export default {
  components: {
    TextInput,
    EmailInput,
    PasswordInput
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      formError: ""
    };
  },
  methods: {
    onSubmit() {
      // Submit the form and commit the changes to Vuex
      const formData = { ...this.formData };
      if (formData.password === formData.confirmPassword) {
        this.$store.dispatch("signup", {
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
      } else {
        this.formError = "Password and Confirm password fields do not match";
      }
    }
  }
};
</script>
