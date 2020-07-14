<template>
    <div class="appointmentRecord">
        <nav>
            <top :title="title"></top>
        </nav>
        <div class="tab_switch">
            <span v-for="(item,index) in tab" :key="index" :class="index==i?'active':''" @click="changeTab(index)">{{item}}</span>
        </div>
        <main>
            <reserved v-if="i==0"></reserved>
            <visited v-if="i==1"></visited>
        </main>
    </div>
</template>

<script>
    import top from "../../../../components/Header/header.vue"
    import visited from "../../../../components/Visited/visited.vue"
    import reserved from '../../../../components/Reserved/reserved.vue'
    export default {
        components:{
            top,
            visited,
            reserved,
        },
        data(){
            return{
                title:'预约记录',
                tab:["已预约","已就诊"],
                i:0//默认显示已预约组件
            }
        },
        methods:{
            changeTab(index){//切换tab显示
                this.i=index
            }
        }
    }
</script>

<style lang="less" scoped>
.appointmentRecord{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    nav{
        width: 100%;
        height: 64px;
    }
    .tab_switch{
        width: 100%;
        height: 44px;
        background-color: #fff;
        border-top: 1px solid #f9f9f9;
        display: flex;
        justify-content:space-around;
        span{
            width: 94px;
            text-align: center;
            line-height: 44px;
            &.active{
                border-bottom: 3px solid #008c8c;
                color: #008c8c;
            }
        }
    }
    main{
        flex: 1;
        background-color: #f3f3f3;
        overflow-y: auto;
    }
}
</style>