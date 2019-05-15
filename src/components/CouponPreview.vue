<template>
    <div id="preview">
        <img v-bind:src="coupon.imgURL">
    </div>
</template>

<script>
export default {
    name: 'preview',
    props: ['coupon']
}
</script>

<style scoped>
img {
    width: 100%;
}
</style>

