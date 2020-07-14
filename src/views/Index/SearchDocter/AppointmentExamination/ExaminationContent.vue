<template>
  <div class="ExaminationContent">
    <div class="ExaminationContent_title">
      <div class="ExaminationContent_title_top">
        <div class="pic_name">
          <div class="pic"></div>
          <div class="name">入职检查</div>
        </div>
        <div class="ExaminationContent_info">
          科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比科比
        </div>
      </div>
      <div class="ExaminationContent_title_careful">
        请自行带纸质表格,套餐含5元早餐，如不需要请自行去项
        <br />(点修改套餐-全部项目)
      </div>
    </div>
    <div class="gray_box"></div>
    <div class="ExaminationContent_main_nav">
      <span
        v-for="(item, index) in tabbar"
        :key="index"
        @click="active(index)"
        :class="index == i ? 'active' : ''"
        >{{ item }}</span
      >
    </div>
    <div class="ExaminationContent_main">
      <packageitems v-if="i == 0"></packageitems>
      <physicalexaminationnotice v-if="i == 1"></physicalexaminationnotice>
    </div>
    <div class="InspectionFee">
      <div class="price">
        <div class="total">共15个项目</div>
        <div class="total_price">个人支付 <span>￥159</span></div>
      </div>
      <div class="next" @click="pushAppointmentinformation">下一步</div>
    </div>
  </div>
</template>

<script>
import packageitems from "../../../../components/PackageItems/packageItems.vue";
import physicalexaminationnotice from "../../../../components/Physicalexaminationnotice/physicalexaminationnotice.vue";
export default {
  components: {
    packageitems,
    physicalexaminationnotice,
  },
  data() {
    return {
      tabbar: ["套餐项目", "体检须知"],
      i: 0, //套餐项目激活
    };
  },
  methods: {
    active(index) {
      this.i = index;
    },
    //跳转到用户预约信息组件
    pushAppointmentinformation(){
      this.$router.push("/appointmentExamination/appointmentinformation")
    }
  },
};
</script>

<style lang="less" scoped>
.ExaminationContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .ExaminationContent_title {
    width: 100%;
    height: 184px;
    background-color: #fff;
    padding: 0 9px;
    display: flex;
    flex-direction: column;
    .ExaminationContent_title_top {
      width: 100%;
      height: 120px;
      border-bottom: 1px dashed #ccc;
      display: flex;
      flex-direction: column;
      .pic_name {
        width: 100%;
        height: 60px;
        display: flex;
        .pic {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: skyblue;
        }
        .name {
          flex: 1;
          padding: 7px 0 0 15px;
          font-size: 14px;
        }
      }
      .ExaminationContent_info {
        flex: 1;
        color: #666;
        line-height: 20px;
      }
    }
    .ExaminationContent_title_careful {
      flex: 1;
      color: #666;
      line-height: 20px;
      padding-top: 15px;
    }
  }
  .gray_box {
    width: 100%;
    height: 11px;
  }
  .ExaminationContent_main_nav {
      width: 100%;
      height: 43px;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #f9f9f9;
      background-color: #fff;
      span {
        width: 94px;
        line-height: 43px;
        text-align: center;
        &.active {
          border-bottom: 3px solid #008c8c;
        }
      }
    }
  .ExaminationContent_main {
    flex: 1;
    background-color: #fff;
    overflow-y: auto;
  }
  .InspectionFee {
    width: 100%;
    height: 8.2918%;
    display: flex;
    border-top: 1px solid #32c5bd;
    background-color: #fff;
    .next {
      width: 33%;
      height: 100%;
      background-color: #32c5bd;
      color: white;
      font-size: 14px;
      line-height: 50px;
      text-align: center;
    }
    .price {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 5px 0 0 9px;
      div {
        flex: 1;
      }
      .total {
        font-size: 11px;
        color: #999;
      }
      .total_price {
        span {
          color: #ed5565;
        }
      }
    }
  }
}
</style>
