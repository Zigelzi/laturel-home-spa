<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card house-association">
          <div class="card-body">
            <h1 class="card-title">{{ housingAssociation.name }}</h1>
            <p class="card-text">{{ housingAssociation.businessId }}</p>
            <p class="card-text">
              {{ housingAssociation.street }}
              {{ housingAssociation.streetNumber }},
              {{ housingAssociation.postalCode }} {{ housingAssociation.city }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    housingAssociation: Object
  }
};
</script>

<style lang="scss" scoped>
.house-association {
  background: #fefefe;
  max-width: 400px;
}
</style>
