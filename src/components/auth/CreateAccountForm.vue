<template>
  <div>
    <slot></slot>
    <form action="">
      <TextInput inputName="userName" v-model="user.name">Nimi</TextInput>
      <EmailInput inputname="userEmail" v-model="user.email"
        >Sähköposti</EmailInput
      >
      <PasswordInput inputName="userPassword" v-model="user.password">
        Salasana</PasswordInput
      >
      <PasswordInput inputName="confirmPassword" v-model="user.confirm">
        Vahvista salasana
      </PasswordInput>
      <input class="btn btn-primary" type="submit" value="Rekisteröidy" />
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
      user: {
        name: "",
        email: "",
        password: "",
        confirm: ""
      }
    };
  }
};
</script>
