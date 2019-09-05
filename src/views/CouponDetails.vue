<template>
  <div id="couponPage">
    <div id="main">
      <div v-if="showCode==true" id="codeWindow">
        <p
          style="color:#AD8B7C;margin-top:0;padding-top:20px;font-size:14px"
        >Bitte Code an der Kasse vorzeigen</p>
        <div class="movingBorder" v-if="showQR == false" id="barcode">
          <barcode
            v-bind:value="coupon.qrCode"
            :options="{ displayValue: false, height: 60, lineColor: '#682F1C'}"
          ></barcode>
        </div>
        <div class="movingBorder" v-if="showQR == true" id="qrcode">
          <qrcode v-bind:value="coupon.eanCode" size="150" foreground="#682F1C" level="H"></qrcode>
        </div>
        <div>
          <h2 class="bk" style="color:#AD8B7C">{{coupon.plu}}</h2>
          <p
            v-if="showQR==false"
            v-on:click="showQR=true"
            style="margin-bottom:0;color:#AD8B7C;font-size:14px"
          >Zu QR-Code wechseln</p>
          <p
            v-if="showQR==true"
            v-on:click="showQR=false"
            style="margin-bottom:15px;color:#AD8B7C;font-size:14px"
          >Zu EAN-Code wechseln</p>
        </div>
      </div>
      <img v-if="showCode==false" class="mainImg" v-bind:src="`http://burgerking.de${imgUrl}`" />
      <h1 class="bk" style="margin-bottom:0">{{coupon.title}}</h1>
      <p style="margin:0;font-size:10px">{{coupon.description}}</p>
      <h2 class="bk" style="margin-top:5px;color:#AD8B7C">{{coupon.price}}</h2>
      <h2 class="bk">TEILNEHMENDE RESTAURANTS</h2>
      <img
        id="kingfinder"
        src="https://www.payback.de/resources/blob/90962/6ae696f1064cd59345774f62ae6333d5/1-img-resdata4.png"
        alt="King Finder"
      />
      <p style="color:#AD8B7C;line-height:1;font-size:12px" v-html="coupon.footnote"></p>
    </div>
    <button class="bk" v-if="showCode==false" v-on:click="showCode=true" id="redeemButton">
      <h3>EINLÖSEN</h3>
    </button>
    <button class="bk" v-if="showCode==true" v-on:click="showCode=false" id="redeemButton">
      <h3>FERTIG</h3>
    </button>
    <FooterBar />
  </div>
</template>

<script>
import data from "../data";
import VueBarcode from "@chenfengyuan/vue-barcode";
import QrcodeVue from "qrcode.vue";
import FooterBar from "../components/FooterBar";
export default {
  name: "coupon",
  data() {
    return {
      officialCoupons: null,
      coupon: null,
      id: null,
      imgUrl: "",
      showCode: false,
      showQR: false
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    var result = data.getCoupons();
    result.then(response => {
      this.coupon = response.data.find(x => x.id == this.id);
      this.imgUrl = data.finalURL(this.coupon.imgUrl);
    });
  },
  components: {
    barcode: VueBarcode,
    qrcode: QrcodeVue,
    FooterBar
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
h3 {
  margin: 0;
  font-size: 6vw;
}
h1,h2,p {
  padding-left: 3vw;
}
h1,h2 {
  text-transform: uppercase;
  color: #682f1c;
}
p {
  color: #682f1c;
}
#codeWindow {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 100%;
  height: 50vh;
  text-align: center;
  background-color: white;
}
.bk {
  font-family: bkfont;
}
.movingBorder {
  position: relative;
  z-index: 0;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
}

.movingBorder::before {
  content: "";
  position: absolute;
  z-index: -2;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background-color: #399953;
  background-repeat: no-repeat;
  background-size: 50% 50%, 50% 50%;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  background-image: linear-gradient(limegreen, limegreen),
    linear-gradient(white, white), linear-gradient(white, white),
    linear-gradient(white, white);
  animation: rotate 4s linear infinite;
}

.movingBorder::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 6px;
  top: 6px;
  width: calc(100% - 12px);
  height: calc(100% - 12px);
  background: white;
  border-radius: 5px;
}

@keyframes rotate {
	100% {
		transform: rotate(2turn);
	}
}
</style>

