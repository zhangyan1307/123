<template>
  <div class="searchDoctor">
    <!-- 头部组件 -->
    <nav>
      <top :title="'在线问诊'"></top>
    </nav>
    <main>
      <!-- 搜索框 -->
      <div class="search_box">
        <input
          type="text"
          :class="isSearch ? 'small' : ''"
          @focus="focus"
          @blur="blur"
          :placeholder="isSearch ? '搜索' : ''"
        />
        <i class="iconfont icon-search1 center" v-if="!isSearch">搜索</i>
        <i class="iconfont icon-search1 left" v-if="isSearch"></i>
        <div class="cancel" v-if="isSearch" @click="focus">取消</div>
      </div>
      <!-- 轮播图 -->
      <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594966206947&di=8aecb2af53a34fcdc768e8e858ab9620&imgtype=0&src=http%3A%2F%2Fwww.talkimages.cn%2Fimages%2Fmedium%2F20163242%2Ftkm005_102348.jpg"> -->
      </div>
      <!-- 选择专家 -->
      <div class="choose_expert">
        <img
          @click="choose"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594966206947&di=8aecb2af53a34fcdc768e8e858ab9620&imgtype=0&src=http%3A%2F%2Fwww.talkimages.cn%2Fimages%2Fmedium%2F20163242%2Ftkm005_102348.jpg"
        />
      </div>
      <!-- 预约服务 -->
      <div class="Appointment_booking_service">
        <div class="service_title">预约服务</div>
        <div class="service_content">
          <router-link to="/hospitalRegister" tag="div">
            <img src="@/assets/Appointment_booking_service/YY-guahao.png" />
            <span>预约挂号</span>
          </router-link>
          <router-link to="/appointmentguidance" tag="div">
            <img src="@/assets/Appointment_booking_service/YY-daozhen.png" />
            <span>导诊预约</span>
          </router-link>
          <router-link to="/introductionDoctor" tag="div">
            <img src="@/assets/Appointment_booking_service/zhuanjia.png" />
            <span>医生介绍</span>
          </router-link>
          <router-link to="/appointmentExamination/chooseHospital" tag="div">
            <img src="@/assets/Appointment_booking_service/YY-tijian.png" />
            <span>预约体检</span>
          </router-link>
          <router-link to="/appointmentRecord" tag="div">
            <img src="@/assets/Appointment_booking_service/YY-jilu.png" />
            <span>预约记录</span>
          </router-link>
        </div>
      </div>
      <!-- 充值缴费 -->
      <div class="Appointment_booking_service Recharge">
        <div class="service_title">充值缴费</div>
        <div class="service_content Recharge_payment">
          <router-link to="/outpatientPayment/true" tag="div">
            <img src="@/assets/payment/menzhen.png" />
            <span>门诊缴费</span>
          </router-link>
          <router-link to="/hospitalizationReserve" tag="div">
            <img src="@/assets/payment/yajinyucun.png" />
            <span>住院预存</span>
          </router-link>
        </div>
      </div>
      <!-- 提醒菜单 -->
      <div class="Appointment_booking_service Recharge">
        <div class="service_title">提醒菜单</div>
        <div class="service_content Recharge_payment">
          <router-link to="/remind" tag="div">
            <img src="@/assets/remind/TX-daozhen.png" />
            <span>导诊提醒</span>
          </router-link>
        </div>
      </div>
      <!-- 预约服务 -->
      <div class="Appointment_booking_service">
        <div class="service_title">自助查询</div>
        <div class="service_content">
          <router-link to="/inspectionReport" tag="div">
            <img src="@/assets/Selfserviceinquiry/jianyanBg.png" />
            <span>检验报告</span>
          </router-link>
          <router-link to="/checkReport" tag="div">
            <img src="@/assets/Selfserviceinquiry/jianchaBg.png" />
            <span>检查报告</span>
          </router-link>
          <router-link to="/OutpatientList" tag="div">
            <img src="@/assets/Selfserviceinquiry/CX-menzhen.png" />
            <span>门诊清单</span>
          </router-link>
          <router-link to="/InpatientList" tag="div">
            <img src="@/assets/Selfserviceinquiry/CX-zhuyuan.png" />
            <span>住院清单</span>
          </router-link>
          <router-link to="/Priceinquiry" tag="div">
            <img src="@/assets/Selfserviceinquiry/CX-wujia.png" />
            <span>物价查询</span>
          </router-link>
          <router-link to="/appointmentRecord" tag="div">
            <img src="@/assets/Selfserviceinquiry/CX-daohang.png" />
            <span>来院导航</span>
          </router-link>
        </div>
      </div>
      <!-- 推荐医生 -->
      <div class="Appointment_booking_service docter">
        <div class="service_title">推荐医生</div>
        <div class="service_content pic">
          <div
            class="service_content_pic"
            v-for="(item, index) in docter"
            :key="index"
          >
            <div class="service_content_pic_top"></div>
            <span class="service_content_pic_bottom">
              <p>{{ item.name }}</p>
              <p>{{ item.content }}</p>
            </span>
          </div>
        </div>
        <div class="more" @click="choose">更多></div>
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
      isSearch: false,
      docter: [
        {
          name: "程大强",
          content: "专业负责、靖安今夜、天花乱之最"
        },
        {
          name: "程大强",
          content: "专业负责、靖安今夜、天花乱之最"
        },
        {
          name: "程大强",
          content: "专业负责、靖安今夜、天花乱之最"
        }
      ]
    };
  },
  methods: {
    focus() {
      //输入框集中焦点
      this.isSearch = true;
    },
    blur() {
      //输入框失去焦点
      this.isSearch = false;
    },
    choose() {
      this.$router.push("/chooseExpert"); //跳转到选择专家组件
    }
  }
};
</script>

<style lang="less" scoped>
.searchDoctor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    width: 100%;
    height: 40px;
    background-color: #fff;
  }
  main {
    flex: 1;
    overflow-y: auto;
    padding-top: 8px;
    .search_box {
      width: 95%;
      height: 32px;
      align-self: center;
      position: relative;
      margin: 0 auto;
      input {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        text-indent: 3em;
        font-size: 12px;
      }
      .small {
        width: 90%;
      }
      .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #7f7f7f;
        font-size: 12px;
      }
      .left {
        position: absolute;
        left: 4%;
        top: 50%;
        transform: translateY(-50%);
      }
      .cancel {
        width: 10%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        line-height: 32px;
        text-align: center;
      }
    }
    .banner {
      width: 95%;
      height: 160px;
      margin: 8px auto 0;
      .my-swipe {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        .van-swipe-item {
          width: 100%;
          height: 100%;
          color: #fff;
          font-size: 40px;
          line-height: 150px;
          text-align: center;
          background-color: #39a9ed;
        }
      }
    }
    .choose_expert {
      width: 95%;
      height: 100px;
      margin: 10px auto 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
    .Appointment_booking_service {
      width: 100%;
      height: 200px;
      background-color: #fff;
      margin-top: 10px;
      padding: 19px 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      &.Recharge {
        height: 110px;
      }
      &.docter {
        height: 199px;
        border-bottom: 10px solid #f3f3f3;
        position: relative;
      }
      .service_title {
        width: 70px;
        height: 20px;
        border-left: 6px solid #2185d0;
        text-align: center;
        line-height: 20px;
        font-size: 13px;
        font-weight: bold;
      }
      .service_content {
        width: 100%;
        height: 136px;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        &.pic {
          justify-content: space-between;
        }
        &.Recharge_payment {
        }
        div {
          width: 25%;
          height: 61px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          img {
            width: 40px;
            height: 40px;
            align-self: center;
          }
          span {
            align-self: center;
            font-size: 11px;
            color: #666;
          }
        }
        .service_content_pic {
          width: 30%;
          height: 100%;
          display: flex;
          flex-direction: column;
          text-align: center;
          .service_content_pic_top {
            width: 100px;
            height: 69px;
            background-color: skyblue;
            border-radius: 10px;
            margin: 0 auto;
          }
          .service_content_pic_bottom {
            width: 100%;
            flex: 1;
            padding: 8px 0 0 0;
            p:nth-child(1) {
              font-size: 15px;
              text-align: center;
              color: #000;
            }
            p:nth-child(2) {
              display: -webkit-box;
              overflow: hidden;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
          }
        }
      }
      .more {
        position: absolute;
        top: 15px;
        right: 15px;
        color: #999;
      }
    }
  }
}
</style>
