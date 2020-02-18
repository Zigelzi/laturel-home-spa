<template>
  <div>
    Luo korjaus
    <div>
      <SelectField
        inputName="repairCategories"
        v-model="test"
        :options="selectCategories"
        >Valitse kategoria</SelectField
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SelectField from "@/components/inputs/SelectField";
export default {
  components: {
    SelectField
  },
  data() {
    return {
      categories: [],
      selectCategories: []
    };
  },
  methods: {
    getCategories() {
      // Get the categories from backend to be listed on tabs
      const path = "/ha/repair_category";
      axios
        .get(path)
        .then(res => {
          this.categories = res.data.repairCategories;
          this.categoriesToSelectOptions(this.categories);
        })
        .catch(error => {
          //eslint-disable-next-line
        console.error(error)
        });
    },
    categoriesToSelectOptions(categoriesArray) {
      categoriesArray.forEach(category => {
        let categoryItem = {
          value: category.name.toLowerCase(),
          label: category.name
        };
        this.selectCategories.push(categoryItem);
      });
    }
  },
  created() {
    this.getCategories();
  }
};
</script>
