<template>
    <div class="hospitalRegister">
        <nav>
            <top :title="title"></top>
        </nav>
        <main></main>
    </div>
</template>

<script>
    import top from "../../../../components/Header/header.vue"
    export default {
        components:{
            top,
        },
        data(){
            return{
                title:'选择挂号科室'
            }
        }
    }
</script>

<style lang="less" scoped>
.hospitalRegister{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    nav{
        width: 100%;
        height: 64px;
    }
    main{
        flex: 1;
        background-color: #f3f3f3;
    }
}
</style>