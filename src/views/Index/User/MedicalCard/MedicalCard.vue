<template>
    <div class="Medical_card">
        <nav>
            <top :title="'就诊卡管理'"></top>
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
.Medical_card{
    width: 100%;
    height: 100%;
    nav{
        width: 100%;
        height: 64px;
    }
}
</style>