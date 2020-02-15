<template>
  <div>
    <TopNav />
    <h1 class="content-title">Huoltotiedot</h1>
    <p>Tähän tulee huoltoon liittyvät asiat</p>
    <router-view></router-view>
  </div>
</template>
<script>
import TopNav from "@/components/navigation/TopNav";

export default {
  components: { TopNav }
};
</script>
