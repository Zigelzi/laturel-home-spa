<template>
  <div class="messages">
    <p>Status: {{ response.status }}</p>
    <p>Message: {{ response.message }}</p>
    <button class="btn btn-primary" @click="hideMessage()">
      Clear
    </button>
  </div>
</template>

<script>
export default {
  props: {
    response: Object
  },
  methods: {
    hideMessage() {
      this.$emit("messageCleared");
    }
  }
};
</script>
