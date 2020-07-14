<template>
  <div class="consultingRoom">
    <!-- 头部组件 -->
    <nav>
      <top :title="'诊室'"></top>
    </nav>
    <div class="Search">
      <input
        type="text"
        placeholder="请输入搜索关键字"
        @input="search"
        v-model="value"
      />
      <i class="iconfont icon-search1"></i>
      <i class="iconfont icon-close" v-if="close" @click="clear"></i>
    </div>
    <main></main>
  </div>
</template>

<script>
import top from "@/components/Header/header";
import { debounce } from "@/tool/shake.js";
export default {
  components: {
    top
  },
  data() {
    return {
      value: "",
      close: false //输入框显示标识
    };
  },
  methods: {
    search: debounce(function() {
      if (this.value) {
        this.close = true;
      } else {
        this.close = false;
      }
    }, 1000),
    clear() {
      this.value = "";
      this.close = false;
    }
  }
};
</script>

<style lang="less" scoped>
.consultingRoom {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    width: 100%;
    height: 64px;
    background-color: #fff;
  }
  .Search {
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #f3f3f3;
    display: flex;
    padding: 7px 20px;
    position: relative;
    background-color: #fff;
    input {
      flex: 1;
      background-color: #f3f3f3;
      border-radius: 5px;
      text-indent: 2em;
    }
    .icon-search1 {
      position: absolute;
      top: 50%;
      left: 25px;
      transform: translateY(-50%);
    }
    .icon-close {
      position: absolute;
      top: 50%;
      right: 25px;
      transform: translateY(-50%);
    }
  }
  main {
    flex: 1;
  }
}
</style>
