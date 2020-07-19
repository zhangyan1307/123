<template>
  <div class="ChoosingPhysician">
    <nav>
      <top :title="'选择医师'"></top>
    </nav>
    <main>
      <div class="main_Container">
        <div class="main_Container_Top">
          <div class="main_Container_Top_Pic"></div>
          <div class="main_Container_Top_Info">
            <div>张炎<span>主治医师</span></div>
            <div>
              门诊 （1号楼）2楼
            </div>
            <div>
              <p>服务人次：<span>0</span></p>
              <p>好评率：<span>0</span></p>
            </div>
          </div>
        </div>
        <div class="main_Container_Center">
          擅长:内科主任医师。大学本科。医学学士。擅长于内科
          常见病、多发病的诊断治疗.尤其是高血压、糖尿病的诊
          治。重点研究方向是高校人群心血管疾病的危险因素监测 以及防治。
        </div>
      </div>
      <div class="day">
        <div
          :class="index == i ? 'day_Container active' : 'day_Container'"
          v-for="(item, index) in date"
          :key="index"
          @click="chooseDate(index)"
          ref="date"
        >
          <div>{{ item.day }}</div>
          <div>{{ item.date }}</div>
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
      date: [],
      i: 0,
      week: "",
      day: ""
    };
  },
  methods: {
    //选择日期
    chooseDate(index) {
      this.i = index;
      let week = this.$refs.date[index].childNodes[0].innerHTML;
      let date = this.$refs.date[index].childNodes[2].innerHTML;
      this.week=week
      this.day=date
      console.log(this.week,this.day)
    }
  },
  mounted() {
    var dt = new Date();
    var time = new Date().getTime();
    var weekDay = [
      "星期天",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六"
    ];
    //月
    let month =
      new Date(time).getMonth() + 1 >= 10
        ? new Date(time).getMonth() + 1
        : "0" + (new Date(time).getMonth() + 1);
    let month1 =
      new Date(time + 86400000 * 1).getMonth() + 1 >= 10
        ? new Date(time + 86400000 * 1).getMonth() + 1
        : "0" + (new Date(time + 86400000 * 1).getMonth() + 1);
    let month2 =
      new Date(time + 86400000 * 2).getMonth() + 1 >= 10
        ? new Date(time + 86400000 * 2).getMonth() + 1
        : "0" + (new Date(time + 86400000 * 2).getMonth() + 1);
    let month3 =
      new Date(time + 86400000 * 3).getMonth() + 1 >= 10
        ? new Date(time + 86400000 * 3).getMonth() + 1
        : "0" + (new Date(time + 86400000 * 3).getMonth() + 1);
    let month4 =
      new Date(time + 86400000 * 4).getMonth() + 1 >= 10
        ? new Date(time + 86400000 * 4).getMonth() + 1
        : "0" + (new Date(time + 86400000 * 4).getMonth() + 1);
    let month5 =
      new Date(time + 86400000 * 5).getMonth() + 1 >= 10
        ? new Date(time + 86400000 * 5).getMonth() + 1
        : "0" + (new Date(time + 86400000 * 5).getMonth() + 1);
    let month6 =
      new Date(time + 86400000 * 6).getMonth() + 1 >= 10
        ? new Date(time + 86400000 * 6).getMonth() + 1
        : "0" + (new Date(time + 86400000 * 6).getMonth() + 1);
    //日
    let date =
      new Date(time).getDate() >= 10
        ? new Date(time).getDate()
        : "0" + new Date(time).getDate();
    let date1 =
      new Date(time + 86400000 * 1).getDate() >= 10
        ? new Date(time + 86400000 * 1).getDate()
        : "0" + new Date(time + 86400000 * 1).getDate();
    let date2 =
      new Date(time + 86400000 * 2).getDate() >= 10
        ? new Date(time + 86400000 * 2).getDate()
        : "0" + new Date(time + 86400000 * 2).getDate();
    let date3 =
      new Date(time + 86400000 * 3).getDate() >= 10
        ? new Date(time + 86400000 * 3).getDate()
        : "0" + new Date(time + 86400000 * 3).getDate();
    let date4 =
      new Date(time + 86400000 * 4).getDate() >= 10
        ? new Date(time + 86400000 * 4).getDate()
        : "0" + new Date(time + 86400000 * 4).getDate();
    let date5 =
      new Date(time + 86400000 * 5).getDate() >= 10
        ? new Date(time + 86400000 * 5).getDate()
        : "0" + new Date(time + 86400000 * 5).getDate();
    let date6 =
      new Date(time + 86400000 * 6).getDate() >= 10
        ? new Date(time + 86400000 * 6).getDate()
        : "0" + new Date(time + 86400000 * 6).getDate();
    this.week = weekDay[dt.getDay()];
    this.day = month + "/" + date;
    this.date = [
      {
        day: weekDay[dt.getDay()],
        date: month + "/" + date
      },
      {
        day:
          weekDay[dt.getDay() + 1 < 7 ? dt.getDay() + 1 : dt.getDay() + 1 - 7],
        date: month1 + "/" + date1
      },
      {
        day:
          weekDay[dt.getDay() + 2 < 7 ? dt.getDay() + 2 : dt.getDay() + 2 - 7],
        date: month2 + "/" + date2
      },
      {
        day:
          weekDay[dt.getDay() + 3 < 7 ? dt.getDay() + 3 : dt.getDay() + 3 - 7],
        date: month3 + "/" + date3
      },
      {
        day:
          weekDay[dt.getDay() + 4 < 7 ? dt.getDay() + 4 : dt.getDay() + 4 - 7],
        date: month4 + "/" + date4
      },
      {
        day:
          weekDay[dt.getDay() + 5 < 7 ? dt.getDay() + 5 : dt.getDay() + 5 - 7],
        date: month5 + "/" + date5
      },
      {
        day:
          weekDay[dt.getDay() + 6 < 7 ? dt.getDay() + 6 : dt.getDay() + 6 - 7],
        date: month6 + "/" + date6
      }
    ];
    console.log(this.week,this.day)
  }
};
</script>

<style lang="less" scoped>
.ChoosingPhysician {
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
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    .main_Container {
      width: 95%;
      height: 172px;
      border-radius: 10px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      margin: 10px auto;
      .main_Container_Top {
        width: 100%;
        height: 82px;
        display: flex;
        background-color: #d9e7f5;
        border-radius: 10px 10px 0 0;
        padding: 10px 10px 0 10px;
        .main_Container_Top_Pic {
          width: 60px;
          height: 60px;
          background-color: skyblue;
          border-radius: 50%;
        }
        .main_Container_Top_Info {
          flex: 1;
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          div:nth-child(1) {
            font-size: 18px;
            color: #aeb6c3;
            span {
              font-size: 12px;
              padding-left: 10px;
              color: #666666;
            }
          }
          div:nth-child(3) {
            display: flex;
            color: #666;
            span {
              color: #2185d7;
            }
            p:nth-child(2) {
              flex: 1;
              padding-left: 23px;
            }
          }
        }
      }
      .main_Container_Center {
        flex: 1;
        font-size: 13px;
        color: #999;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        padding: 10px;
      }
    }
    .day {
      width: 100%;
      height: 62px;
      background-color: #fff;
      padding: 7px 4px;
      display: flex;
      justify-content: space-between;
      .day_Container {
        width: 48px;
        height: 48px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        &.active {
          background-color: #2185d0;
          color: white;
        }
        div {
          flex: 1;
          text-align: center;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
