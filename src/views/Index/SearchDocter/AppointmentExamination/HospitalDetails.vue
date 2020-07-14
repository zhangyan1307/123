<template>
  <div class="hospitalDetails">
    <!-- 搜索框 -->
    <div class="search-box">
      <input
        type="text"
        placeholder="请输入关键字"
        v-model="value"
        @input="input"
      />
      <i class="iconfont icon-search1"></i>
      <i class="iconfont icon-close" v-if="close" @click="clear"></i>
    </div>
    <main>
      <div class="event" v-for="item in event" :key="item.id" @click="pushExaminationContent">
        <div class="event_pic"></div>
        <div class="event_info">
          <p>{{ item.item_Name }}</p>
          <p class="price">￥ {{ item.price }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: [
        {
          id: 1,
          item_Name: "入职检查",
          price: 888,
        },
        {
          id: 2,
          item_Name: "常规检查",
          price: 999,
        },
        {
          id: 3,
          item_Name: "全身检查",
          price: 1888,
        },
        {
          id: 4,
          item_Name: "孕妇检查检查",
          price: 2888,
        },
      ], //检查项目
      close: false, //控制关闭图标显示
      value: "", //输入框的值
    };
  },
  methods: {
    input() {
      if (this.value) {
        this.close = true;
      } else {
        this.close = false;
      }
    },
    //清空输入kuang
    clear() {
      this.value = "";
      this.close = false;
    },
    //跳转到体检内容组件并传id
    pushExaminationContent(){
      this.$router.push("/appointmentExamination/examinationContent")
    }
  },
};
</script>

<style lang="less" scoped>
.hospitalDetails {
  display: flex;
  flex-direction: column;
  .search-box {
    width: 100%;
    height: 54px;
    background-color: #fff;
    padding: 10px 16px;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      background-color: #f7f8fa;
      border-radius: 10px;
      text-indent: 2em;
    }
    .icon-search1 {
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
    }
    .icon-close {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  }
  main {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 8px 0 8px;
    .event {
      width: 168px;
      height: 118px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      .event_pic {
        width: 100%;
        height: 90px;
        background-color: skyblue;
        border-radius: 10px 10px 0 0;
      }
      .event_info {
        display: flex;
        justify-content: space-around;
        p {
          line-height: 28px;
          font-size: 12px;
        }
        .price {
          color: #ff4400;
        }
      }
    }
  }
}
</style>
