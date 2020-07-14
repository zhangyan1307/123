<template>
  <div class="chooseHospital">
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
      <div
        class="appointmentExamination_center"
        v-for="item in containerValue"
        :key="item.id"
        @click="pushDetails"
      >
        <div class="container">
          <div class="hospitalName">{{ item.hospitalName }}</div>
          <div class="hospital_pic_info">
            <div class="hospital_pic"></div>
            <div class="hospital_info">
              <p>电话：{{ item.telephone }}</p>
              <p>地址：{{ item.address }}</p>
            </div>
          </div>
          <div class="more">查看>></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      containerValue: [
        {
          id: 1,
          hospitalName: "湘雅医院",
          address: "湖南省长沙市芙蓉区迎宾路口",
          telephone: "0730-4131325",
        },
        {
          id: 2,
          hospitalName: "湖南师范大学",
          address: "湖南省长沙市岳麓区大学城",
          telephone: "0730-4131325",
        },
        {
          id: 3,
          hospitalName: "中南大学",
          address: "湖南省长沙市岳麓区大学城",
          telephone: "0730-4131325",
        },
      ], //医院信息
      close: false, //控制关闭图标显示
      value: "", //输入框的值
    };
  },
  methods: {
    pushDetails() {
      this.$router.push(
        "/appointmentExamination/hospitalDetails"
      );
    },
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
  },
};
</script>

<style lang="less" scoped>
.chooseHospital {
  width: 100%;
  height: 100%;
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
    padding: 10px 8px 0 8px;
    .appointmentExamination_center {
      width: 100%;
      height: 110px;
      border-radius: 10px;
      background-color: #fff;
      padding: 16px 0 16px 20px;
      margin-bottom: 10px;
      .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        font-size: 13px;
        position: relative;
        .more {
          font-size: 11px;
          color: #ff8400;
          position: absolute;
          top: 0px;
          right: 11px;
        }
        .hospital_pic_info {
          flex: 1;
          display: flex;
          padding-top: 7px;
          .hospital_pic {
            width: 90px;
            height: 60px;
            background-color: skyblue;
            border-radius: 5px;
          }
          .hospital_info {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding-left: 10px;
            font-size: 11px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
