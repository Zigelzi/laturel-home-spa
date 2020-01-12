<template>
  <div>
    <div>
      <h1>Laturel Koti</h1>
      <p>Tervetuloa takaisin Kotiin!</p>
    </div>
    <form action="">
      <EmailInput inputName="userEmail" v-model="formData.email"
        >Sähköposti
      </EmailInput>
      <PasswordInput inputName="userPassword" v-model="formData.password"
        >Salasana</PasswordInput
      >
      <input
        class="btn btn-primary"
        type="submit"
        value="Kirjaudu sisään"
        @click.prevent="onSubmit"
      />
    </form>
  </div>
</template>

<script>
import EmailInput from "@/components/inputs/EmailInput";
import PasswordInput from "@/components/inputs/PasswordInput";
export default {
  components: { EmailInput, PasswordInput },
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      const formData = { ...this.formData };
      this.$store.dispatch("login", {
        email: formData.email,
        password: formData.password
      });
    }
  }
};
</script>
