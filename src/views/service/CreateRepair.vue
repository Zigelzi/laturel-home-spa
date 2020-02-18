<template>
  <div>
    Luo korjaus
    <div>
      <SelectField
        inputName="repairCategories"
        v-model="test"
        :options="categories"
        >Valitse kategoria</SelectField
      >
    </div>
    {{ test }}
  </div>
</template>
<script>
import SelectField from "@/components/inputs/SelectField";
export default {
  components: {
    SelectField
  },
  data() {
    return {
      categories: [
        {
          value: "category1",
          label: "Category 1"
        },
        {
          value: "category2",
          label: "Category 2"
        }
      ],
      test: ""
    };
  }
};
</script>
