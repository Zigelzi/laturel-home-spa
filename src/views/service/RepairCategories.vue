<template>
  <div>
    <div>
      <h2>Kategoriat</h2>
      <Tabs :tabs="categories" />
    </div>
    <CreateCategoryForm @categoryAdded="getCategories" />
  </div>
</template>
<script>
import axios from "axios";
import CreateCategoryForm from "@/components/service/CreateCategoryForm";
import Tabs from "@/components/common/Tabs";

export default {
  components: {
    CreateCategoryForm,
    Tabs
  },
  data() {
    return {
      categories: []
    };
  },
  methods: {
    getCategories() {
      const path = "/ha/repair_category";
      axios
        .get(path)
        .then(res => {
          this.categories = res.data.repairCategories;
        })
        .catch(error => {
          //eslint-disable-next-line
        console.error(error)
        });
    }
  },
  created() {
    this.getCategories();
  }
};
</script>
