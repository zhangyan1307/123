<template>
  <div class="index">
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-link  :to="item.url" tag="span" v-for="(item,index) in router" :key="item.id"
        ><i :class="item.class" @click="changetitle(index)"></i>{{item.content}}</router-link
      >
    </footer>
  </div>
</template>

<script>
import top from "../../components/Header/header.vue"; //引入公共头部组件
export default {
  components: {
    top,
  },
  data() {
    return {
      router: [
        {
          id: 1,
          url: "/index/consultingRoom",
          class: "iconfont icon-yiyuan",
          content: "诊室",
        },
        {
          id: 2,
          url: "/index/searchDocter",
          class: "iconfont icon-search",
          content: "找医生",
        },
        {
          id: 3,
          url: "/index/user",
          class: "iconfont icon-user",
          content: "个人中心",
        },
      ],//tabbar信息
      i:1,//头部信息标识
    };
  },
  methods:{
      changetitle(index){
          this.i=index
      }
  }
};
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow-y: auto;
  }
  footer {
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    user-select: none;
    span {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      &.router-link-active {
        color: #3690d4;
      }
    }
  }
}
</style>
