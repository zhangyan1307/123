<template>
    <div class="Medical_card">
        <nav>
            <top :title="'就诊卡管理'"></top>
        </nav>
        <div class="title">
            <p>当前就诊人：</p>
            <p>
                <i class="iconfont icon-user"></i>
                <span>张炎</span>
                <section>432432258</section>
            </p>
        </div>
        <main>
            <div class="main_Container">
                <i class="iconfont icon-user"></i>
                <div class="main_Container_info">
                    <p>张炎<span>查看条形码</span></p>
                    <p>就诊卡号：43245874</p>
                    <p>手机号码：18174418703</p>
                </div>
                <van-icon name="passed" />
            </div>
            <van-button type="info" @click="pushaddVisitors">添加就诊人</van-button>
        </main>
    </div>
</template>

<script>
import top from '@/components/Header/header'
    export default {
        components:{
            top,
        },
        methods:{
            pushaddVisitors(){
                this.$router.push({
                    path:'/addVisitors'
                })
            }
        }
    }
</script>

<style lang="less" scoped>
.Medical_card{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    nav{
        width: 100%;
        height: 40px;
    }
    .title{
        width: 100%;
        height: 80px;
        padding: 0 0 15px 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family:"楷体";
        p:nth-child(1){
            font-size: 16px;
        }
        p:nth-child(2){
            display: flex;
            justify-content: space-between;
            i{
                color: #2284cf;
            }
            span:nth-child(2){
                color: #666;
                padding-left: 13px;
                font-size: 16px;
            }
            section:nth-child(3){
                 flex: 1;
                 font-size: 15px;
                 padding-left: 20px;
            }
        }
    }
    main{
        flex: 1;
        background-color: #f3f3f3;
        padding: 15px 10px;
        display: flex;
        flex-direction: column;
        position: relative;
        .van-button{
            border-radius: 10px;
            width: 90%;
            position: absolute;
            left: 50%;
            bottom: 20px;
            transform: translateX(-50%);
        }
        .main_Container{
            width: 100%;
            height: 91px;
            background-color: #fff;
            border-radius: 10px;
            display: flex;
            padding: 20px 30px 10px;
            i{
                font-size: 30px;
                color: #2284cf;
            }
            .main_Container_info{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-left: 17px;
                p:nth-child(1){
                    font-size: 16px;
                    span{
                        font-size: 12px;
                        color: #2284cf;
                        margin-left: 46px;
                    }
                }
                p:nth-child(2),p:nth-child(3){
                    font-size: 12px;
                    color: #666666;
                }
            }
        }
    }
}
</style>