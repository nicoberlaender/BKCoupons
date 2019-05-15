<template>
    <div class="grid">
        <CouponPreview v-for="coupon in coupons" v-bind:key="coupon.id" v-bind:coupon="coupon"/>
        <p>{{officialCoupons}}</p>
    </div>
</template>

<script>
import CouponPreview from '../components/CouponPreview'
import axios from 'axios'
export default {
    name: 'coupons',
    data () {
        return {
            coupons: [
                {
                    id: 1,
                    title: "Chili Cheesee",
                    price: 1.00,
                    imgURL: "https://www.burgerking.de/tmp/image-thumb__11471__product_detail/tmp-1112-de.png",
                },
                {
                    id: 2,
                    title: "Whopper Junior",
                    price: 1.00,
                    imgURL: "https://www.burgerking.de/tmp/image-thumb__13315__product_detail/tmp-1124-de.png"
                },
                {
                    id: 3,
                    title: "Big King XXL",
                    price: 3.99,
                    imgURL: "https://www.burgerking.de/tmp/image-thumb__12359__product_detail/tmp-1097-de.png"
                },
                {
                    id: 4,
                    title: "Crispy Chicken",
                    price: 1.00,
                    imgURL: "https://www.burgerking.de/001_general/products/productimages/burger/image-thumb__506__product_detail/crispychicken.png"
                },
                {
                    id: 5,
                    title: "Chili Cheese Nuggets",
                    price: 1.99,
                    imgURL: "https://www.burgerking.de/001_general/products/productimages/kingsnacks/image-thumb__759__product_detail/chilicheesenuggets.png"
                },
                {
                    id: 6,
                    title: "2 Chicken Nugget Burger",
                    price: 1.99,
                    imgURL: "https://slurger.max1220.de/img/D-APPC-60199-2ChickenNuggetBurger-1.png",
                    PLU: 60199
                }
            ],
            officialCoupons: null
        }
    },
    components: {
        CouponPreview
    },
    mounted () {
        axios
            .get(`${'https://cors-anywhere.herokuapp.com/'}https://api.burgerking.de/api/o2uvrPdUY57J5WwYs6NtzZ2Knk7TnAUY/v4/de/de/coupons/`)
            .then(response => this.officialCoupons = response);
    }
}
</script>

<style scoped>
.grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    background-size: contain;
}
</style>

