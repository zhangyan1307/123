
<template>
    <div class="appointmentGuidance">
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
                title:'智能导诊'
            }
        }
    }
</script>

<style lang="less" scoped>
.appointmentGuidance{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    nav{
        width: 100%;
        height: 40px;
    }
    main{
        flex: 1;
        background-color: #f3f3f3;
    }
}
</style>