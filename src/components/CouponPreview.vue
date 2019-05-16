<template>
    <div id="preview">
        <router-link :to="{ name: 'coupon', params: { id: this.coupon.id }}">
            <img v-bind:src="`http://burgerking.de${finalURL}`">
        </router-link>
    </div>
</template>

<script>
import data from '../data'
export default {
    name: 'preview',
    data() {
        return {
            finalURL: ""
        }
    },
    props: ['coupon'],
    mounted() {
            this.finalURL = data.finalURL(this.coupon.images.bgImage.url);
        }
}
</script>

<style scoped>
img {
    width: 100%;
    padding: 0;
    border: 0;
    margin: 0;
}
</style>

