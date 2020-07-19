<template>
    <div class="Electronic_Social_Security_Card"> 
        <nav>
            <top :title="'电子社保卡管理'"></top>
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
.Electronic_Social_Security_Card{
    width: 100%;
    height: 100%;
    nav{
        width: 100%;
        height: 40px;
    }
}
</style>