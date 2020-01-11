<template>
  <div>
    <div>
      <h1>Laturel Koti</h1>
      <p>Tervetuloa takaisin Kotiin!</p>
    </div>
    <form action="">
      <EmailInput inputName="userEmail" v-model="user.email"
        >Sähköposti
      </EmailInput>
      <PasswordInput inputName="userPassword" v-model="user.password"
        >Salasana</PasswordInput
      >
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
      user: {
        email: "",
        password: ""
      }
    };
  }
};
</script>
