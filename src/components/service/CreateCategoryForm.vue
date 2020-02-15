<template>
  <div>
    <h3>Luo kategoria</h3>
    <p>
      Luo uusi korjauskategoria jolla voit etsiä ja lajitella taloyhtiön
      korjauksia
    </p>
    <form action="">
      <TextInput inputName="categoryName" v-model="category.name"
        >Kategorian nimi
      </TextInput>
      <TextInput inputName="categoryDescription" v-model="category.description"
        >Kategorian kuvaus
      </TextInput>
      <input
        class="btn btn-primary"
        type="submit"
        value="Luo kategoria"
        @click.prevent="onSubmit"
      />
    </form>
  </div>
</template>
<script>
import axios from "axios";
import TextInput from "@/components/inputs/TextInput";

export default {
  components: {
    TextInput
  },
  data() {
    return {
      category: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    onSubmit() {
      const path = "/ha/repair_category";
      const payload = this.category;

      axios
        .post(path, payload)
        .then(res => {
          //eslint-disable-next-line
          console.log(res)
          this.$store.commit("updateShowBackendMessage", true);
          this.$store.commit("updateBackendMessage", {
            message: res.data.message,
            status: res.data.status
          });
          this.$emit("categoryAdded");
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
  }
};
</script>
