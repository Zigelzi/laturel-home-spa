<template>
  <div>
    <div>
      <RepairTabs />
    </div>
    <CreateCategoryForm @categoryAdded="getCategories" />
  </div>
</template>
<script>
import axios from "axios";
import CreateCategoryForm from "@/components/service/CreateCategoryForm";
import RepairTabs from "@/components/service/RepairTabs";

export default {
  components: {
    CreateCategoryForm,
    RepairTabs
  },
  data() {
    return {};
  },
  methods: {
    getCategories() {
      // Get the categories from backend to be listed on tabs
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
  }
};
</script>
