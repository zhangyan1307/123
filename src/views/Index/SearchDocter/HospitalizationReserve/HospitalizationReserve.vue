<template>
    <div class="Hospitalization_Reserve">
        <nav>
            <top :title="title"></top>
        </nav>
        <main>
            <outpatientpayment :type="1"></outpatientpayment>
        </main>
    </div>
</template>

<script>
    import top from '@/components/Header/header.vue'
    import outpatientpayment from '@/views/Index/SearchDocter/OutpatientPayment/OutpatientPayment'
    export default {
        components:{
            top,
            outpatientpayment
        },
        data(){
            return{
                title:"押金预存",
            }
        }
    }
</script>

<style lang="less" scoped>
.Hospitalization_Reserve{
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