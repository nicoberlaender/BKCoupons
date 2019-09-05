<template>
  <div>
    <div class="grid">
      <CouponPreview
        v-for="coupon in officialCoupons"
        v-bind:key="coupon.id"
        v-bind:coupon="coupon"
      />
    </div>
    <FooterBar />
  </div>
</template>

<script>
import CouponPreview from "../components/CouponPreview";
import FooterBar from "../components/FooterBar";
import data from "../data";
export default {
  name: "coupons",
  components: {
    CouponPreview,
    FooterBar
  },
  data() {
    return {
      officialCoupons: null
    };
  },
  mounted() {
    var result = data.getCoupons();
    result.then(response => (this.officialCoupons = response.data));
  },
  methods: {
      sortByPrice() {
          this.officialCoupons.sort((a,b) => a["price"] < b["price"] ? -1 : 1);
      }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(2, 1fr);
  background-size: contain;
  height: 93vh;
  overflow-y: scroll;
}
</style>

