<template>
  <div id="footerBar">
    <h2 class="bk">
      <i v-on:click="$router.go(-1)" class="material-icons">arrow_back_ios</i>
      <i style="float:right" class="material-icons" @click="sortByPrice">sort</i>
      <i style="float:right;margin-right:2vw" class="material-icons" @click="startTimer">timer</i>
    </h2>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
  methods: {
      sortByPrice() {
          this.$parent.sortByPrice();
      },
      startTimer() {
        this.$parent.startTimer();
      }
  }
};
</script>

<style scoped>
#footerBar {
  background-color: white;
  text-align: left;
  padding: 0;
  margin: 0;
  border: 0;
}
h2 {
    padding: 1vh;
    margin: 0;
    border: 0;
}
</style>