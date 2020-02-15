<template>
  <div>
    <div>
      <h2>Kategoriat</h2>
      <p v-for="(category, index) in categories" :key="index">
        {{ category.name }} - {{ category.description }}
      </p>
    </div>
    <CreateCategoryForm @categoryAdded="getCategories" />
  </div>
</template>
<script>
import axios from "axios";
import CreateCategoryForm from "@/components/service/CreateCategoryForm";
export default {
  components: {
    CreateCategoryForm
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
