<template>
  <div class="inspect">
    <nav>
      <top :title="'检查报告'"></top>
    </nav>
    <main>
      <div class="inspect_container" v-for="(item,index) in inspect" :key="index" @click="pushDetail">
        <p>{{item.type}}</p>
        <p>{{item.date}}</p>
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
      inspect:[
        {
          type:'(省) CT检查：头颅（平扫）',
          date:'2020-07-11 9:39'
        },
        {
          type:'(省) CT检查：头颅（平扫）',
          date:'2020-07-11 9:39'
        },
        {
          type:'(省) CT检查：头颅（平扫）',
          date:'2020-07-11 9:39'
        },
        {
          type:'(省) CT检查：头颅（平扫）',
          date:'2020-07-11 9:39'
        },
        {
          type:'(省) CT检查：头颅（平扫）',
          date:'2020-07-11 9:39'
        },
        {
          type:'(省) CT检查：头颅（平扫）',
          date:'2020-07-11 9:39'
        },
      ]
    }
  },
  methods:{
    pushDetail(){
      this.$router.push("/Detail")
    }
  }
};
</script>

<style lang="less" scoped>
.inspect {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav{
      width: 100%;
      height: 40px;
  }
  main{
    background-color: #f3f3f3;
    flex: 1;
    overflow-y: auto;
    padding: 10px 7px;
    .inspect_container{
      width: 100%;
      height: 80px;
      background-color: #fff;
      border-radius: 10px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      padding: 20px 16px;
      justify-content: space-between;
      p:nth-child(1){
        font-size: 15px;
      }
    }
  }
}
</style>
