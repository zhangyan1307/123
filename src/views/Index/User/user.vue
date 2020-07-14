<template>
  <div class="user">
    <nav>
        <top :title="'个人中心'"></top>
    </nav>
    <div class="user_info">
      <div class="user_Container">
        <div class="user_pic" @click="pushLogin"></div>
        <div class="user_Container_info">
          <p>张炎</p>
          <p>
            <i class="iconfont icon-location"> 湖南省长沙市</i
            ><i class="iconfont icon-shouji"> 18174418703</i>
          </p>
        </div>
      </div>
      <div class="user_Tab">
        <router-link to="/MyInvoice" tag="div">
          <img src="@/assets/User/my_01.png" />
          <span>我的发票</span>
        </router-link>
        <router-link to="/checkReport" tag="div">
          <img src="@/assets/User/my_02.png" />
          <span>体检报告</span>
        </router-link>
        <router-link to="/MedicalRecords" tag="div">
          <img src="@/assets/User/my_03.png" />
          <span>就诊记录</span>
        </router-link>
      </div>
    </div>
    <main>
      <div class="main_Container">
        <router-link to="/MedicalCard" tag="div">
            <p><img src="@/assets/User/card_01.png"><span>就诊卡</span></p>
            <img src="@/assets/User/trun_left.png">
        </router-link>
        <router-link to="/ElectronicSocialSecurityCard" tag="div">
            <p><img src="@/assets/User/card_02.png"><span>电子社保卡</span></p>
            <img src="@/assets/User/trun_left.png">
        </router-link>
        <router-link to="/RehabilitationGuidelines" tag="div">
            <p><img src="@/assets/User/card_03.png"><span>康复指引</span></p>
            <img src="@/assets/User/trun_left.png">
        </router-link>
        <router-link to="/CommercialInsurance" tag="div">
            <p><img src="@/assets/User/card_04.png"><span>商业保险</span></p>
            <img src="@/assets/User/trun_left.png">
        </router-link>
        <router-link to="/Setting" tag="div">
            <p><img src="@/assets/User/card_05.png"><span>设置</span></p>
            <img src="@/assets/User/trun_left.png">
        </router-link>
      </div>
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
      pushLogin(){
          this.$router.push("/login")
      }
  }
};
</script>

<style lang="less" scoped>
.user {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav{
      width: 100%;
      height: 64px;
      background-color: #5fc7fc;
      color: #fff;
  }
  .user_info {
    width: 100%;
    height: 140px;
    background: linear-gradient(to top, #fff, #afe4ff, #5fc7fc);
    display: flex;
    justify-content: center;
    padding: 0 19px;
    position: relative;
    .user_Container {
      width: 100%;
      height: 60px;
      display: flex;
      color: #fff;
      .user_pic {
        width: 60px;
        height: 60px;
        background-color: red;
        border-radius: 50%;
      }
      .user_Container_info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 8px 10px;
        p:nth-child(1) {
          font-size: 15px;
        }
        i {
          font-size: 12px;
          margin-right: 10px;
        }
      }
    }
    .user_Tab {
      width: 90%;
      height: 91px;
      background-color: #fff;
      border-radius: 10px;
      position: absolute;
      bottom: -60%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      padding: 15px 0;
      justify-content: space-around;
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
          width: 33px;
          height: 33px;
          align-self: center;
        }
      }
    }
  }
  main {
    flex: 1;
    padding: 71px 14px;
    .main_Container {
      width: 100%;
      height: 260px;
      border-radius: 10px;
      background-color: #fff;
      padding: 22px 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        width: 100%;
        height: 17px;
        display: flex;
        justify-content: space-between;
        p{
            display: flex;
            img{
                width: 17px;
                height: 17px;
            }
            span{
                padding-left: 14px;
            }
        }
        img{
            width: 7px;
            height: 11px;
            align-self: center;
        }
      }
    }
  }
}
</style>
