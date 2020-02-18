<template>
  <div class="form-group">
    <label :for="inputName"><slot></slot></label>
    <select
      ref="selectField"
      :id="inputName"
      class="form-control"
      @input="inputChanged"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        >{{ option.label }}</option
      >
    </select>
  </div>
</template>
<script>
export default {
  props: {
    inputName: String,
    options: Array
  },
  methods: {
    inputChanged() {
      this.$emit("input", this.$refs.selectField.value);
    }
  }
};
</script>
