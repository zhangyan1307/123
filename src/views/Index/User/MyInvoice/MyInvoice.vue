<template>
    <div class="My_Invoice">
        <nav>
            <top :title="'我的发票'"></top>
        </nav>
    </div>
</template>

<script>
import top from '@/components/Header/header'
    export default {
        components:{
            top,
        }
    }
</script>

<style lang="less" scoped>
.My_Invoice{
    width: 100%;
    height: 100%;
    nav{
        width: 100%;
        height: 64px;
    }
}
</style>