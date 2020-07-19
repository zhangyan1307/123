<template>
    <div class="Rehabilitation_Guidelines"> 
        <nav>
            <top :title="'康复指引'"></top>
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
.Rehabilitation_Guidelines{
    width: 100%;
    height: 100%;
    nav{
        width: 100%;
        height: 40px;
    }
}
</style>