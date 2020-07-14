<template>
    <div class="Setting">
         <!-- 头部组件 -->
    <nav>
        <top :title="'设置'"></top>
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
.Setting{
    width: 100%;
    height: 100%;
    nav{
        width: 100%;
        height: 64px;
        background-color: #fff;
    }
}
</style>