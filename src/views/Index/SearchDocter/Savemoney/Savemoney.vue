<template>
  <div class="save_money">
    <nav>
      <top :title="'押金预存'"></top>
    </nav>
    <div class="gray"></div>
    <main>
      <div class="Patient_information">
        <div>
          <span>姓名：科比</span>
          <span>床号：16</span>
        </div>
        <div>
          <span>性别：男</span>
          <span>科室：内科</span>
        </div>
        <div>
          <span>住院号：1607060123</span>
          <span>余额：10000</span>
        </div>
      </div>
      <div class="input">
        <van-cell-group>
          <van-field v-model="value" label="请输入金额" />
        </van-cell-group>
      </div>
      <div class="View_payment_records">
          查看  <span @click="pushPaymentRecords">缴费记录 >></span>
      </div>
      <div class="price">
          <div v-for="(item,index) in price" :key="index" ref="getPrice" @click="getPrice(index)">￥{{item}}</div>
      </div>
    </main>
    <div class="payment">
      <button @click="CheckOut">立即支付</button>
    </div>
  </div>
</template>

<script>
import top from "@/components/Header/header";
export default {
  components: {
    top
  },
  data() {
    return {
      value: "",//输入框值
      price:[300,500,1000,1500,3000,5000]
    };
  },
  methods:{
      pushPaymentRecords(){
          this.$router.push("/paymentRecords")//跳转到支付记录组件
      },
      getPrice(index){
          this.value=this.$refs.getPrice[index].innerHTML.split("￥")[1]
      },
      CheckOut(){
          if(!this.value){
              this.Toast.fail('请输入充值金额');
          }else if(this.value%100!=0&&this.value>=100){
              this.Toast.fail('请输入充值金额为100的倍数');
          }else if(this.value<100){
              this.Toast.fail('充值金额必须大于等于100');
          }
      }
  }
};
</script>

<style lang="less" scoped>
.save_money {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 26px;
  nav {
    width: 100%;
    height: 40px;
  }
  .gray {
    width: 100%;
    height: 10px;
    background-color: #f1f1f1;
  }
  main {
    flex: 1;
    padding: 0 8px;
    .Patient_information {
      width: 100%;
      height: 135px;
      border-radius: 5px;
      background-color: #2185d0;
      color: #fff7f3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 18px;
      div {
        display: flex;
        justify-content: space-between;
        span {
          flex: 1;
        }
      }
    }
    .input{
        border-bottom: 1px solid #f1f1f1;
    }
    .View_payment_records{
        width: 100%;
        font-size: 11px;
        text-align: right;
        padding-top: 14px;
        span{
            color: #f99e07;
        }
    }
    .price{
        width: 100%;
        height: 108px;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        margin-top: 22px;
        div{
            width: 30%;
            height: 47px;
            border:1px solid #f99e07;
            color: #f99e07;
            font-size: 11px;
            border-radius: 5px;
            display: flex;
            justify-content:center;
            align-items: center;
            margin-bottom: 15px;
            font-weight: bold;
        }
    }
  }
  .payment {
    width: 100%;
    height: 47px;
    padding: 0 30px;
    display: flex;
    button {
      flex: 1;
      border-radius: 10px;
      background-color: #2185d0;
      color: white;
      border: none;
      font-size: 18px;
    }
  }
}
</style>
