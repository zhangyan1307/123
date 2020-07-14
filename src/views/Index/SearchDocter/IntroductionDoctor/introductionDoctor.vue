<template>
  <div class="introductionDoctor">
    <nav>
      <top :title="title"></top>
    </nav>
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
      <div class="main_Container" @click="pushChoosingPhysician">
        <div class="main_Container_Pic"></div>
        <div class="main_Container_Info">
          <div class="main_Container_Info_Top">
            <div>张炎</div>
            <div>主任医生</div>
          </div>
          <div class="main_Container_Info_Center">
            擅长:复杂老年腰椎退变疾病及脊柱爆裂骨折的手 术治疗:类风关、
            强制性脊柱炎等脊柱风湿病的手术治疗;脊柱侧弯、脊柱肿瘤及脊柱结核的手术...
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import top from "../../../../components/Header/header.vue";
export default {
  components: {
    top
  },
  data() {
    return {
      title: "专家介绍",
      close: false, //控制关闭图标显示
      value: "" //输入框的值
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
    //跳转到选择医师组件
    pushChoosingPhysician(){
      this.$router.push("/ChoosingPhysician")
    }
  }
};
</script>

<style lang="less" scoped>
.introductionDoctor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    width: 100%;
    height: 64px;
  }
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
    background-color: #f3f3f3;
    padding: 10px 7px;
    .main_Container {
      width: 100%;
      height: 91px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      padding: 10px;
      margin-bottom: 10px;
      .main_Container_Pic {
        width: 60px;
        height: 60px;
        background-color: skyblue;
        border-radius: 50%;
      }
      .main_Container_Info {
        flex: 1;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        .main_Container_Info_Top {
          display: flex;
          div:nth-child(2) {
            padding: 2px;
            color: #008c8c;
            border: 1px solid #008c8c;
            font-size: 10px;
            margin-left: 5px;
          }
          div:nth-child(1) {
            align-self: center;
            font-size: 16px;
            color: #333;
          }
        }
        .main_Container_Info_Center {
          padding-top: 2px;
          flex: 1;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          font-size: 11px;
          color: #999;
        }
      }
    }
  }
}
</style>
