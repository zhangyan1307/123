<template>
  <div class="Payment_history">
    <div class="Payment_history_Container" v-for="(item,index) in history" :key="index">
      <div class="Payment_history_Container_left">
        <p class="number">订单编号：{{item.number}}</p>
        <p class="type">订单类型：{{item.type}}</p>
        <p class="date">日期：{{item.date}}</p>
      </div>
      <div class="Payment_history_Container_rigth">
        <p class="payed" :class="item.isPay?'':'noPay'">{{item.isPay?'已缴费':'未缴费'}}</p>
        <p class="total">合计：<span>￥{{item.total}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            history:[
                {
                    number:123456,
                    type:"药品费",
                    date:"2020-7-10",
                    isPay:false,
                    total:88
                },
                {
                    number:123456,
                    type:"药品费",
                    date:"2020-7-10",
                    isPay:true,
                    total:88
                },
                {
                    number:123456,
                    type:"药品费",
                    date:"2020-7-10",
                    isPay:false,
                    total:88
                },
                {
                    number:123456,
                    type:"药品费",
                    date:"2020-7-10",
                    isPay:true,
                    total:87
                },
                {
                    number:123456,
                    type:"药品费",
                    date:"2020-7-10",
                    isPay:true,
                    total:89
                },
                {
                    number:123456,
                    type:"药品费",
                    date:"2020-7-10",
                    isPay:true,
                    total:88
                },
                {
                    number:123456,
                    type:"药品费",
                    date:"2020-7-10",
                    isPay:false,
                    total:82
                },
            ]
        }
    }
};
</script>

<style lang="less" scoped>
.Payment_history {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  .Payment_history_Container {
    width: 100%;
    height: 115px;
    border-bottom: 1px solid #f3f3f3;
    padding: 22px 0;
    display: flex;
    .Payment_history_Container_left {
      flex: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .number {
        font-size: 13px;
        color: #666;
      }
      .date {
        color: #999;
      }
    }
    .Payment_history_Container_rigth {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 25px;
      .payed {
        font-size: 13px;
        color: #666;
        &.noPay{
            color: red;
        }
      }
      .total {
        span {
          color: red;
        }
      }
    }
  }
}
</style>
