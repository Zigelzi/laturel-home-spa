<template>
  <div class="form-group">
    <label :for="inputName"><slot></slot></label>
    <input
      type="date"
      :id="inputName"
      ref="inputField"
      class="form-control"
      :value="value"
      @input="inputChanged"
    />
  </div>
</template>
<script>
export default {
  props: {
    inputName: String,
    value: String
  },
  methods: {
    inputChanged() {
      this.$emit("input", this.$refs.inputField.value);
    }
  }
};
</script>
