<template>
  <div>
    <CreateAccountForm><h1>Rekisteröidy Laturel Kotiin</h1></CreateAccountForm>
  </div>
</template>

<script>
import CreateAccountForm from "@/components/auth/CreateAccountForm";
export default {
  name: "createAccount",
  components: {
    CreateAccountForm
  }
};
</script>
