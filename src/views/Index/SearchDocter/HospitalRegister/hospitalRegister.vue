<template>
  <div class="hospitalRegister">
    <nav>
      <top :title="title"></top>
    </nav>
    <main>
      <div class="left">
        <div
          :class="i == index ? 'every_last active' : 'every_last'"
          v-for="(item, index) in ClassList"
          :key="index"
          @click="changeClass(index)"
        >
          {{ item }}
          <div class="line" v-if="i == index"></div>
        </div>
      </div>
      <div class="right">
        <div
          class="right_Detail"
          v-for="(item, index) in DetailList[i]"
          :key="index"
          @click="pushIntroductionOfExperts(item.levelDepartmentId)"
        >
          {{ item.departmentName }}
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import top from "../../../../components/Header/header.vue";
import { list } from "../../../../request/api.js";
export default {
  components: {
    top
  },
  data() {
    return {
      title: "选择挂号科室",
      ClassList: [], //分类列表
      DetailList: [], //详细信息
      i: 0 //默认选中第一个
    };
  },
  methods: {
    //点击切换分类
    changeClass(index) {
      this.i = index;
    },
    //跳转到专家介绍组件
    pushIntroductionOfExperts(id) {
      this.$router.push({
        path: "/IntroductionOfExperts",
        query: {
          id,
        }
      });
    }
  },
  async mounted() {
    let res = await list();
    let hospitalList = res.data.data;
    console.log(hospitalList);
    hospitalList.forEach(item => {
      this.ClassList.push(item.levelDepartmentName);
      this.DetailList.push(item.children);
    });
  }
};
</script>

<style lang="less" scoped>
.hospitalRegister {
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
    display: flex;
    .left {
      flex: 3.5;
      background-color: skyblue;
      overflow-y: auto;
      background-color: #fff;
      .every_last {
        width: 100%;
        height: 44px;
        padding-left: 15px;
        line-height: 44px;
        position: relative;
        &.active {
          background-color: #f3f3f3;
          font-weight: bold;
        }
        .line {
          width: 6px;
          height: 100%;
          background-color: #2185d0;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
    .right {
      flex: 6.5;
      padding: 16px;
      .right_Detail {
        font-size: 14px;
        color: #666;
        font-weight: bold;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
