<template>
  <div class="container">
    <div class="row">
      <form action="">
        <div class="col">
          <h1>Lisää uusi taloyhtiö</h1>
          <div class="form-group">
            <label for="name">Taloyhtiön nimi</label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              v-model="housingAssociation.name"
            />
          </div>
          <div class="form-group">
            <label for="businessId">Y-tunnus</label>
            <input
              type="text"
              name=""
              id="businessId"
              class="form-control"
              v-model="housingAssociation.businessId"
            />
          </div>
          <div class="form-group">
            <label for="street">Katu</label>
            <input
              type="text"
              name="street"
              id="street"
              class="form-control"
              v-model="housingAssociation.street"
            />
          </div>
          <div class="form-group">
            <label for="streeNumber">Kadun numero</label>
            <input
              type="text"
              name="streeNumber"
              id="streeNumber"
              class="form-control"
              v-model="housingAssociation.streeNumber"
            />
          </div>
          <div class="form-group">
            <label for="postalCode">Postinumero</label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              class="form-control"
              v-model="housingAssociation.postalCode"
            />
          </div>
          <div class="form-group">
            <label for="city">Kaupunki</label>
            <input
              type="text"
              name="city"
              id="city"
              class="form-control"
              v-model="housingAssociation.city"
            />
            <input
              type="submit"
              value="Lähetä"
              class="btn btn-primary"
              @click.prevent="onSubmit()"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      housingAssociation: {
        name: "",
        businessId: "",
        street: "",
        streetNumber: 0,
        postalCode: "",
        city: ""
      }
    };
  },
  methods: {
    initForm() {
      this.housingAssociation.name = "";
      this.housingAssociation.businessId = "";
      this.housingAssociation.street = "";
      this.housingAssociation.streetNumber = 0;
      this.housingAssociation.postalCode = "";
      this.housingAssociation.city = "";
    },
    onSubmit() {}
  }
};
</script>
