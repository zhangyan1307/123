<template>
  <div class="Price_inquiry">
    <nav>
      <top :title="'物价查询'">
      </top>
    </nav>
    <div class="tab">
        <span v-for="(item,index) in tab" :key="index" @click="changeTab(index)" :class="i==index?'active':''">
              {{item}}
          </span>
    </div>
    <div class="Search">
        <input type="text" placeholder="请输入搜索关键字" @input="search" v-model="value">
        <i class="iconfont icon-search1"></i>
    </div>
    <main>
        <div class="Drug_price" v-if="i==0">
            <div class="Drug_container">
                <div class="Drug_title">
                    <p>药品名称</p>
                    <p>规格</p>
                    <p>单位</p>
                    <p>单价(元)</p>
                </div>
                <div class="Drug" v-for="(item,index) in Drug" :key="index">
                    <p>{{item.name}}</p>
                    <p>{{item.weight}}</p>
                    <p>{{item.company}}</p>
                    <p>{{item.price}}</p>
                </div>
            </div>
        </div>
        <div class="Pharmaceutical_technology_price" v-if="i==1">
            <div class="Pharmaceutical_technology_price_container">
                <div class="title">
                    <p>项目名称</p>
                    <p>单位(次)</p>
                    <p>单价(元)</p>
                </div>
                <div class="title_info" v-for="(item,index) in technology" :key="index">
                    <p>{{item.name}}</p>
                    <p>{{item.company}}</p>
                    <p>{{item.price}}</p>
                </div>
            </div>
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
          value:'',//输入框的值
          tab:["药品价格","医技价格"],
          i:0,//默认显示药品价格
          Drug:[{
                  name:'小伙子',
                  weight:"0.2克",
                  company:"片",
                  price:200
              },
              {
                  name:'小伙子',
                  weight:"0.2克",
                  company:"片",
                  price:300
              },
              {
                  name:'小伙子',
                  weight:"1",
                  company:"片",
                  price:400
              },],
          technology:[{
                  name:'科比',
                  company:1,
                  price:200 
              },
              {
                  name:'科比',
                  company:1,
                  price:200 
              },
              {
                  name:'科比',
                  company:1,
                  price:200 
              },
              {
                  name:'科比',
                  company:1,
                  price:200 
              },
              {
                  name:'科比',
                  company:1,
                  price:200 
              },]
      }
  },
  methods:{
      changeTab(index){
          this.i=index
          this.value=''
      },
      search(){
          if(this.i==0){
             console.log("药品价格")
          }else{
             console.log("药技价格")
          }
      }
  },
};
</script>

<style lang="less" scoped>
.Price_inquiry {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    width: 100%;
    height: 64px;
    border-bottom: 1px solid #f3f3f3;
  }
  .tab {
    width: 100%;
    height: 43px;
    border-bottom: 1px solid #f9f9f9;
    display: flex;
    justify-content: space-around;
    span{
        width: 94px;
        height: 43px;
        line-height: 43px;
        text-align: center;
        &.active{
            color: #008c8c;
            border-bottom: 3px solid #008c8c;
        }
    }
  }
  .Search{
      width: 100%;
      height: 54px;
      border-bottom: 10px solid #f3f3f3;
      display: flex;
      padding:7px 20px;
      position: relative;
      input{
          flex: 1;
          background-color: #f3f3f3;
          border-radius: 5px;
          text-indent: 2em;
      }
      i{
          position: absolute;
          top: 50%;
          left: 25px;
          transform: translateY(-50%);
      }
  }
  main{
      flex: 1;
      background-color: #f3f3f3;
      .Drug_price{
          width: 100%;
          height: 100%;
          .Drug_container{
              width: 100%;
              background-color: #fff;
              padding: 21px 17px 0 17px;
              border-radius: 10px;
              display: flex;
              flex-direction: column;
              .Drug_title{
                  display: flex;
                  font-size: 15px;
                  justify-content: space-between;
                  padding-bottom: 10px;
                  p{
                      width: 20%;
                  }
                  p:nth-child(2),p:nth-child(3),p:nth-child(4){
                      text-align: center;
                  }
              }
              .Drug{
                  display: flex;
                  justify-content: space-between;
                  color: #666;
                  margin-bottom: 15px;
                  p{
                      width: 20%;
                  }
                  p:nth-child(2),p:nth-child(3),p:nth-child(4){
                      text-align: center;
                  }
              }
          }
      }
      .Pharmaceutical_technology_price_container{
          width: 100%;  
          background-color: #fff;
          border-radius: 5px;
          padding: 20px 30px;
          .title{
              display: flex;
              justify-content: space-between;
              padding-bottom: 10px;
              p{
                  width: 20%;
                  text-align: center;
                  font-size: 15px;
              }
          }
          .title_info{
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
              p{
                  width: 20%;
                  text-align: center;
                  color: #666;
              }
          }
      }
  }
}
</style>
