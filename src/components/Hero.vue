<script lang="ts" setup>

</script>


<template>
    <div class="banner-image">
        <img src="../assets/images/banner1.png" >
        <div class="banner-overlay"></div>
    </div>
</template>


<style lang="scss" scoped>
    .banner-image{
        z-index: -1;
        width: 100%;
        height: 720px;
        position: absolute;
      
        top: 0;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .banner-overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.452);
        }
    }
</style>