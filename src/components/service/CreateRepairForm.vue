<template>
  <div>
    <h3>Luo korjaus</h3>
    <p>Luo uusi korjaus taloyhtiölle</p>
    <form action="">
      <TextInput inputName="repairTitle" v-model="repair.title">Nimi</TextInput>
      <DateInput inputName="repairDate" v-model="repair.repair_date"
        >Valmistumispäivämäärä</DateInput
      >
      <TextInput inputName="repairTitle" v-model="repair.description"
        >Kuvaus</TextInput
      >
      <SelectInput
        inputName="repairCategories"
        v-model="repair.repair_category_id"
        :options="selectCategories"
        >Valitse kategoria</SelectInput
      >
      <input
        class="btn btn-primary"
        type="submit"
        value="Tallenna"
        @click.prevent="onSubmit"
      />
    </form>
  </div>
</template>
<script>
import axios from "axios";

import TextInput from "@/components/inputs/TextInput";
import SelectInput from "@/components/inputs/SelectInput";
import DateInput from "@/components/inputs/DateInput";

export default {
  components: {
    TextInput,
    SelectInput,
    DateInput
  },
  data() {
    return {
      categories: [],
      selectCategories: [],
      repair: {
        repair_date: this.getToday(),
        title: "",
        description: "",
        housing_association_id: localStorage.getItem("haId"),
        repair_category_id: null
      }
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
          value: category.id,
          label: category.name
        };
        this.selectCategories.push(categoryItem);
      });
    },
    getToday() {
      // Gets current date and formats it to yyyy-mm-dd for DateInput
      const date = new Date();
      const dd = String(date.getDate()).padStart(2, "0");
      // getMonth return zero indexed month therefore needing +1
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const yyyy = date.getFullYear();

      let today = `${yyyy}-${mm}-${dd}`;
      return today;
    },
    onSubmit() {
      const path = "/ha/repair";
      const payload = this.repair;

      axios
        .post(path, payload)
        .then(res => {
          this.$store.commit("updateShowBackendMessage", true);
          this.$store.commit("updateBackendMessage", {
            message: res.data.message,
            status: res.data.status
          });
          this.$emit("repairAdded");
        })
        .catch(error => {
          //eslint-disable-next-line
          console.error(error)
          this.$store.commit("updateShowBackendMessage", true);
          this.$store.commit("updateBackendMessage", {
            message: error.response.data.message,
            status: error.response.data.status
          });
        });
    }
  },
  created() {
    this.getCategories();
  }
};
</script>
