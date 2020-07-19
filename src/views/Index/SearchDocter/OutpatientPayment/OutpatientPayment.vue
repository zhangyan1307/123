<template>
  <div class="Outpatient_Payment">
    <nav v-if="mount">
      <top :title="title"></top>
    </nav>
    <main>
      <div class="Visitor_information" @click="pushPayment">
        <div class="Visitor_information_left">
          <i class="iconfont icon-user1"></i>
        </div>
        <div class="Visitor_information_right">
          <p class="name">张炎</p>
          <p>就诊卡号：40071121</p>
          <p>手机号：18174418703</p>
        </div>
      </div>
      <div class="Choose_Card" @click="pushAddVisitors">
        <div class="Choose_Card_left">+</div>
        <div class="Choose_Card_right">
          <p>添加就诊人</p>
          <p class="add">还可以添加5人</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import top from "@/components/Header/header.vue";
export default {
  props: ["type"],
  components: {
    top
  },
  data() {
    return {
      title: "选卡",
      mount: true
    };
  },
  methods: {
    pushAddVisitors() {
      this.$router.push("/addVisitors"); //跳转到添加就诊人组件
    },
    pushPayment() {
      if (this.type == 1) {
        this.$router.push("/saveMoney"); //跳转到存钱组件
      } else if (this.type == 2) {
        this.$router.push("/report"); //跳转到检验报告组件
      } else if(this.type==3){
        this.$router.push("/inspect")//跳转到检查报告组件
      }
        else {
        this.$router.push("/payment"); //跳转到缴费组件
      }
    }
  },
  mounted() {
    this.mount = Boolean(this.$route.params.top);
  }
};
</script>

<style lang="less" scoped>
.Outpatient_Payment {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    width: 100%;
    height: 40px;
  }
  main {
    flex: 1;
    background-color: #f3f3f3;
    padding: 10px;
    .Choose_Card {
      width: 100%;
      height: 77px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      padding: 15px 0 20px 20px;
      margin-top: 10px;
      .Choose_Card_left {
        flex: 1;
        background-color: #008c8c;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        border-radius: 5px;
      }
      .Choose_Card_right {
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 15px;
        .add {
          color: #999;
        }
      }
    }
    .Visitor_information {
      width: 100%;
      height: 91px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      padding: 21px 0 16px 29px;
      .Visitor_information_left {
        flex: 1;
        display: flex;
        align-items: center;
        i {
          font-size: 35px;
          color: #2284cf;
        }
      }
      .Visitor_information_right {
        flex: 8;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #666;
        .name {
          font-size: 16px;
          color: #333;
        }
      }
    }
  }
}
</style>
