<template>
  <div class="report">
    <nav>
      <top :title="'检验报告'"></top>
    </nav>
    <main>
        <div class="report_container" v-for="(item,index) in report" :key="index" @click="pushDetailedReport">
            <p>{{item.title}}</p>
            <p class="date">{{item.date}}</p>
        </div>
    </main>
  </div>
</template>

<script>
import top from "@/components/Header/header";
export default {
  components: {
    top
  },
  data(){
      return{
         report:[
             {
                 title:"白细胞",
                 date:"2020-07-10 08:04:04"
             },
             {
                 title:"白细胞",
                 date:"2020-07-10 08:04:04"
             },
             {
                 title:"白细胞",
                 date:"2020-07-10 08:04:04"
             },
             {
                 title:"白细胞",
                 date:"2020-07-10 08:04:04"
             },
             {
                 title:"白细胞",
                 date:"2020-07-10 08:04:04"
             },
         ]
      }
  },
  methods:{
      pushDetailedReport(){
          this.$router.push("/DetailedReport")//跳转到详细的检验报告
      }
  }
};
</script>

<style lang="less" scoped>
.report {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    width: 100%;
    height: 64px;
  }
  main {
    flex: 1;
    background-color: #f3f3f3;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 10px 8px 0;
    .report_container{
        width: 100%;
        height: 80px;
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 10px;
        padding: 20px 15px;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        font-size: 15px;
        .date{
            font-size: 12px;
            color: #999;
        }
    }
  }
}
</style>
