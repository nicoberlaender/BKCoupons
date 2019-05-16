<template>
  <div id="couponPage">
    <div id="main">
      <img class="mainImg" v-bind:src="`http://burgerking.de${imgUrl}`">
      <h1 style="margin-bottom:0">{{coupon.title}}</h1>
      <p style="margin:0;font-size:10px">{{coupon.description}}</p>
      <h2 style="margin-top:5px;color:#AD8B7C">{{coupon.price}}</h2>
      <h2>TEILNEHMENDE RESTAURANTS</h2>
      <img
        id="kingfinder"
        src="https://www.payback.de/resources/blob/90962/6ae696f1064cd59345774f62ae6333d5/1-img-resdata4.png"
        alt="King Finder"
      >
    </div>
    <button id="redeemButton">
        <h2>EINLÖSEN</h2>
    </button>
    <div id="footerBar">
        <h2>Footer</h2>
    </div>
  </div>
</template>

<script>
import data from "../data";
export default {
  name: "coupon",
  data() {
    return {
      officialCoupons: null,
      coupon: null,
      id: null,
      imgUrl: ""
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    var result = data.getCoupons();
    result.then(response => {
      this.coupon = response.data.find(x => x.id == this.id);
      this.imgUrl = data.finalURL(this.coupon.images.bgImage.url);
    });
  }
};
</script>

<style scoped>
.mainImg {
  width: 100%;
  background-color: white;
  background-image: url("http://nicoberlaender.de/img/Logo_Burger_King.svg");
  background-size: 45vw;
  background-repeat: no-repeat;
}
#main {
  background-color: linen;
  height: 86vh;
  overflow: scroll;
  text-align: left;
}
#kingfinder {
  width: 100%;
}
#redeemButton {
    width: 100%;
    height: 7vh;
    border: none;
    background-color: orange;
    display: block;
    color: white;
}
#footerBar {
    width: 100%;
    height: 7vh;
    background-color: white;
}
h1, h2, p {
    padding-left: 3vw;
}
h1, h2 {
    text-transform: uppercase;
    color: #682F1C;
}
p {
    color: #682F1C;
}
</style>

