<template>
  <div class="PlaceOrder">
    <nav>
      <top :title="'提交订单'"></top>
    </nav>
    <main>
      <div class="main_Top">
        <div class="main_Container">
          <div class="main_Container_Top">挂号信息</div>
          <div class="main_Container_Center">
            <div>
              <p>看诊门诊</p>
              <p>看诊科室</p>
            </div>
            <div>
              <p>门诊</p>
              <p>儿科</p>
            </div>
            <div>
              <p>看诊时间</p>
              <p>医生</p>
            </div>
            <div>
              <p>2020-07-20</p>
              <p>张炎</p>
            </div>
            <div>
              <p>12:00:00-12:03:00</p>
            </div>
          </div>
          <div class="main_Container_Bottom">挂号费：￥9.00元</div>
        </div>
      </div>
      <van-cell title="就诊人" value="更换就诊人" @click="changeMan" />
      <van-cell title="43242485" value="张炎" />
      <div class="addMan" @click="pushaddVisitors">添加就诊人</div>
      <van-button type="info">确认提交</van-button>
    </main>
  </div>
</template>

<script>
import top from "@/components/Header/header";
export default {
  components: {
    top
  },
  methods:{
      changeMan(){
          
      },
      //添加就诊人
      pushaddVisitors(){
          this.$router.push({
              path:'/addVisitors'
          })
      }
  }
};
</script>

<style lang="less" scoped>
.PlaceOrder {
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  nav {
    width: 100%;
    height: 40px;
    background-color: #fff;
  }
  main {
    flex: 1;
    .main_Top {
      width: 100%;
      height: 246px;
      padding: 10px 10px 5px;
      .main_Container {
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        .main_Container_Top {
          background-color: #2185d0;
          height: 35px;
          border-radius: 5px 5px 0 0;
          color: white;
          font-size: 15px;
          text-align: center;
          line-height: 35px;
        }
        .main_Container_Center {
          height: 151px;
          border-bottom: 1px dashed #ccc;
          padding: 14px 125px 25px 11px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          div {
            display: flex;
            justify-content: space-between;
            p:nth-child(1) {
              flex: 2;
            }
            p:nth-child(2) {
              flex: 1;
            }
          }
          div:nth-child(1),
          div:nth-child(3),
          div:nth-child(5) {
            color: #666;
          }
          div:nth-child(2),
          div:nth-child(4) {
            color: #333;
            font-size: 15px;
          }
        }
        .main_Container_Bottom {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff4400;
        }
      }
    }
    .addMan{
        width: 100%;
        height: 40px;
        background-color: #fff;
        color: #2185d0;
        text-align: center;
        line-height: 40px;
    }
    .van-button{
        width: 90%;
        height: 47px;
        border-radius:20px;
        position: fixed;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
    }
  }
}
</style>
