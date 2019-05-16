<template>
    <div class="grid">
        <CouponPreview v-for="coupon in officialCoupons" v-bind:key="coupon.id" v-bind:coupon="coupon"/>
    </div>
</template>

<script>
import CouponPreview from '../components/CouponPreview'
import axios from 'axios'
import data from '../data'
export default {
    name: 'coupons',
    components: {
        CouponPreview
    },
    data() {
        return {
            officialCoupons: null
        }
    },
    mounted () {
        var result = data.getCoupons();
        result.then(response => this.officialCoupons = response.data);
    }
}
</script>

<style scoped>
.grid {
    display: grid;
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
    background-size: contain;
}
</style>

