<template>
  <div class="messages" v-if="showBackendMessage">
    <p>Status: {{ backendResponse.status }}</p>
    <p>Message: {{ backendResponse.message }}</p>
    <button class="btn btn-primary" @click="hideMessage()">
      Clear
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    backendResponse() {
      return this.$store.state.backendResponse;
    },
    showBackendMessage() {
      return this.$store.state.showBackendMessage;
    }
  },
  methods: {
    hideMessage() {
      this.$store.state.showBackendMessage = false;
    }
  }
};
</script>
