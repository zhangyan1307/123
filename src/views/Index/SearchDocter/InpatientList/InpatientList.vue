<template>
  <div class="Inpatient_list">
    <nav>
      <top :title="'住院清单'"></top>
    </nav>
    <div class="pick">
      <p><span>*</span>发生清单日</p>
      <p>请选择 ></p>
    </div>
    <main>
      <div class="List_container" v-for="(item1, index1) in info" :key="index1">
        <div class="List_container_top">
          <div>{{ item1.type }}</div>
          <div>
            <p>科室：{{ item1.room }}</p>
            <p>医生：{{ item1.docter }}</p>
          </div>
          <div>
            <p>住院号：{{ item1.number }}</p>
            <p>患者：{{ item1.name }}</p>
          </div>
          <div>开始时间：{{ item1.start }}</div>
          <div>结束时间：{{ item1.end }}</div>
          <div>
            <p>项目名称</p>
            <p>单位</p>
            <p>单价</p>
            <p>数量</p>
            <p>价格</p>
          </div>
        </div>
        <div class="List_container_center">
          <div class="container_info" v-for="(item2,index2) in item1.children" :key="index2">
            <p>{{ item2.project }}</p>
            <p>{{ item2.company }}</p>
            <p>{{ item2.price }}</p>
            <p>{{ item2.num }}</p>
            <p>{{ item2.price * item2.num }}</p>
          </div>
          <div class="total">总计：{{total(index1)}}元</div>
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
  data() {
    return {
      info: [
        {
          type: "服务费",
          room: "外科",
          docter: "张炎",
          number: 123456789,
          name: "科比",
          start: "2020-05-20",
          end: "2020-07-20",
          children: [
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 2000,
              num: 2
            },
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 200,
              num: 2
            },
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 200,
              num: 2
            },
          ]
        },
        {
          type: "服务费",
          room: "外科",
          docter: "张炎",
          number: 123456789,
          name: "科比",
          start: "2020-05-20",
          end: "2020-07-20",
          children: [
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 200,
              num: 2
            },
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 200,
              num: 2
            },
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 400,
              num: 2
            },
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 200,
              num: 2
            },
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 200,
              num: 2
            },
          ]
        },
        {
          type: "服务费",
          room: "外科",
          docter: "张炎",
          number: 123456789,
          name: "科比",
          start: "2020-05-20",
          end: "2020-07-20",
          children: [
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 200,
              num: 2
            },
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 2001,
              num: 2
            },
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 300,
              num: 2
            },
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 200,
              num: 2
            },
            {
              project: "全口牙病系统检查与治疗设计",
              company: "外科",
              price: 200,
              num: 2
            },
          ]
        },
      ]
    };
  },
  methods:{
      total(index1){
          let total=0
          this.info[index1].children.forEach(item=>{
              total+=item.price*item.num
          })
          return total
      }
  }
};
</script>

<style lang="less" scoped>
.Inpatient_list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    width: 100%;
    height: 40px;
  }
  .pick {
    width: 100%;
    height: 21px;
    display: flex;
    justify-content: space-between;
    padding: 0 19px 15px 7px;
    align-items: center;
    p:nth-child(1) {
      span {
        color: red;
      }
    }
  }
  main {
    flex: 1;
    background-color: #f3f3f3;
    overflow-y: auto;
    padding: 10px;
    .List_container {
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      padding: 0 15px;
      .List_container_top {
        flex: 2;
        padding: 21px 0 11px 0;
        color: #c3c3c3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: 1px dashed #f3f3f3;
        div{
            margin-bottom: 10px;
        }
        div:nth-child(1) {
          font-size: 15px;
          color: #333;
        }
        div:nth-child(2),
        div:nth-child(3),
        div:nth-child(6) {
          display: flex;
          justify-content: space-between;
        }
        div:nth-child(6) {
          padding-top: 3px;
          color: #666;
          p:nth-child(1) {
            flex: 3;
          }
          p:nth-child(2) {
            flex: 2;
            text-align: center;
          }
          p:nth-child(3),
          p:nth-child(4),
          p:nth-child(5) {
            flex: 1;
            text-align: center;
          }
        }
      }
      .List_container_center {
        flex: 3;
        display: flex;
        flex-direction: column;
        .container_info {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #999;
          margin-bottom: 20px;
          p:nth-child(1) {
            flex: 3;
          }
          p:nth-child(2) {
            flex: 2;
            text-align: center;
          }
          p:nth-child(3),
          p:nth-child(4),
          p:nth-child(5) {
            flex: 1;
            text-align: center;
          }
        }
        .total{
            text-align: right;
            padding-bottom: 20px;
        }
      }
    }
  }
}
</style>
