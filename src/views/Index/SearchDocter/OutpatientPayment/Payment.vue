<template>
  <div class="Payment">
    <nav>
      <top :title="title"></top>
    </nav>
    <div class="Payment_tab">
      <span
        v-for="(item, index) in tab"
        :key="index"
        :class="index == i ? 'active' : ''"
        @click="changeTab(index)"
        >{{ item }}</span
      >
    </div>
    <div class="gray"></div>
    <main>
      <div class="prescription" v-for="(item,index) in prescription" :key="index" v-if="i==0">
        <div class="prescription_left">
          <p class="choose">
            <van-checkbox v-model="item.checked" icon-size="30px" @click="changeOne"></van-checkbox
            ><span>处方编号：{{item.number}}</span>
          </p>
          <p>处方类型：药品费</p>
          <p class="date">开单时间：{{item.date}}</p>
        </div>
        <div class="prescription_right">合计：<span>￥{{item.price}}</span></div>
      </div>
      <paymenthistory v-if="i==1"></paymenthistory>
    </main>
    <div class="Payment_control" v-if="i==0">
      <div class="Payment_control_left">
        <van-checkbox icon-size="30px" v-model="isChecked" @click="changeAll">全选</van-checkbox>
      </div>
      <div class="Payment_control_center">总计：<span>￥{{total}}</span></div>
      <div class="Payment_control_right">前往缴费</div>
    </div>
  </div>
</template>

<script>
import top from "@/components/Header/header";
import paymenthistory from '@/components/PaymentHistory/PaymentHistory'
export default {
  components: {
    top,
    paymenthistory,
  },
  data() {
    return {
      title: "门诊缴费",
      tab: ["门诊缴费", "缴费历史"], //tab显示切换
      i: 0, //默认门诊缴费组件显示
      prescription: [
        {
          number: 123456,
          type: "药品费",
          date: "2020-07-08",
          price: 88,
          checked: true,
        },
        {
          number: 123456,
          type: "药品费",
          date: "2020-07-08",
          price: 88,
          checked: true,
        },
        {
          number: 123456,
          type: "药品费",
          date: "2020-07-08",
          price: 88,
          checked: true,
        },
        {
          number: 123456,
          type: "药品费",
          date: "2020-07-08",
          price: 88,
          checked: true,
        },
      ],
      isChecked:""
    };
  },
  methods: {
    changeTab(index) {//组件切换
      this.i = index;
    },
    changeAll(){//全选
      this.prescription.forEach(item=>{
        item.checked=this.isChecked
      })
    },
    changeOne(){//改变其中一个
      this.isChecked=this.prescription.every(item=>{
        return item.checked
      })
    }
  },
  computed:{
    total(){//总价格
      let totalPrice=0
      let isChecked=[]
      isChecked=this.prescription.filter(item=>{
        return item.checked==true
      })
      isChecked.forEach(item=>{
        totalPrice+=item.price
      })
      return totalPrice
    }
  },
  mounted(){
    this.isChecked=this.prescription.every(item=>{
      return item.checked
    })
  }
};
</script>

<style lang="less" scoped>
.Payment {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    width: 100%;
    height: 64px;
  }
  .Payment_tab {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #f3f3f3;
    span {
      width: 94px;
      text-align: center;
      line-height: 44px;
      &.active {
        border-bottom: 3px solid #008c8c;
      }
    }
  }
  .gray {
    width: 100%;
    height: 10px;
    background-color: #f3f3f3;
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .prescription {
      width: 95%;
      height: 115px;
      align-self: center;
      border-bottom: 1px solid #f3f3f3;
      display: flex;
      padding: 17px 0 22px 0;
      .prescription_left {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .choose {
          display: flex;
          color: #666;
          font-size: 13px;
          span {
            align-self: center;
            padding-left: 7px;
          }
        }
        .date {
          color: #999;
        }
      }
      .prescription_right {
        flex: 1;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          color: red;
        }
      }
    }
  }
  .Payment_control {
    width: 100%;
    height: 59px;
    display: flex;
    border-top: 1px solid #f3f3f3;
    div {
      flex: 1;
    }
    .Payment_control_left {
      align-self: center;
      padding-left: 18px;
    }
    .Payment_control_center {
      align-self: center;
      font-size: 15px;
      span{
        color: red;
      }
    }
    .Payment_control_right {
      background-color: #2185d0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
