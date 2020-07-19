<template>
  <div class="GeneralInformationOfDoctors">
    <nav></nav>
    <div class="docter_info">
      <div>
        <div class="docter_pic"></div>
      </div>
      <div>
        <p>罗江平</p>
        <p>口腔科 主治医生</p>
        <p>广东省北京大学深圳医院</p>
      </div>
      <div>
        <button>已关注</button>
      </div>
    </div>
    <main>
      <div class="evaluate">
        <div>
          <p><span>11</span> 年</p>
          <p>从业年限</p>
        </div>
        <div>
          <p><span>2000</span> 次</p>
          <p>回答次数</p>
        </div>
        <div>
          <p><span>4.9</span> 分</p>
          <div v-if="score <= 1"><i class="iconfont icon-StarFilled"></i></div>
          <section class="star" v-if="score > 1 && score <= 2">
            <i class="iconfont icon-StarFilled"></i>
            <i class="iconfont icon-StarFilled"></i>
          </section>
          <section v-if="score > 2 && score <= 3">
            <i class="iconfont icon-StarFilled"></i>
            <i class="iconfont icon-StarFilled"></i>
            <i class="iconfont icon-StarFilled"></i>
          </section>
          <section v-if="score > 3 && score <= 4">
            <i class="iconfont icon-StarFilled"></i>
            <i class="iconfont icon-StarFilled"></i>
            <i class="iconfont icon-StarFilled"></i>
            <i class="iconfont icon-StarFilled"></i>
            <i class="iconfont icon-StarFilled"></i>
          </section>
          <section v-if="score > 4 && score <= 5">
            <i class="iconfont icon-StarFilled"></i>
            <i class="iconfont icon-StarFilled"></i>
            <i class="iconfont icon-StarFilled"></i>
            <i class="iconfont icon-StarFilled"></i>
            <i class="iconfont icon-StarFilled"></i>
          </section>
        </div>
      </div>
      <div class="chat">
        <div class="chat_top">
          <p>1.医生认证</p>
          <p>2.平均响应时长：10分钟</p>
        </div>
        <div class="chat_center">
          <i class="iconfont icon-id-card"></i>
          <p>在线咨询</p>
          <p>￥100.00</p>
          <img src="@/assets/User/trun_left.png" />
        </div>
      </div>
      <div class="Professional_skills">
        <div class="Professional_skills_top">
          擅长疾病
        </div>
        <div class="Professional_skills_center">
          <span>肺炎</span>
          <span>肺炎</span>
          <span>肺炎</span>
          <span>肺炎</span>
          <span>肺炎</span>
          <span>肺炎</span>
          <span>肺炎</span>
          <span>肺炎</span>
          <span>肺炎</span>
          <span>肺炎</span>
          <span>肺炎</span>
          <span>肺炎</span>
        </div>
      </div>
      <div class="Personal_profile">
        <div class="Personal_profile_top">个人简介</div>
        <div class="Personal_profile_center">
          杨苏安，女,主任医师，教授，妇产科主任,湖南省医学会理事、湖南省妇产科学会委员、湖南省肿瘤学会委员、湖南省围产医学会委员、湖南省医学会医疗事故技术鉴定专家库成员、长沙市医学会常务理事、长沙市医学会妇产科分会主委、长沙市医学会医疗事故技术鉴定专家库成员、国际妇产科联盟会员、长沙市孕产妇死亡评审专家组成员、中国药文化研究会现代医药委员会全国委员、美国国立医学研究中心访问学者。从妇产科临床、教学与科研工作20余年，擅长妇科肿瘤的临床诊断与治疗，开展的腹腔镜手术、盆底重建手术以及阴道手术居市领先水平。先后获得“全国巾帼建功标兵” ”、“长沙市 三八红旗手”、“长沙市白求恩杯先进工作者”、“ 长沙市卫生系统最佳医师”等光荣称号。在各级刊物发表学术论文十余篇，其医德医风和医疗技术水平在同行和患者之间有口皆碑。
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 4.9
    };
  }
};
</script>

<style lang="less" scoped>
.GeneralInformationOfDoctors {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    width: 100%;
    height: 40px;
    background-color: #2185d0;
  }
  .docter_info {
    width: 100%;
    height: 114px;
    background-color: #2185d0;
    display: flex;
    padding: 0 14px 29px 14px;
    div:nth-child(1) {
      flex: 1;
      div {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: red;
      }
    }
    div:nth-child(2) {
      flex: 3;
      display: flex;
      flex-direction: column;
      color: white;
      justify-content: space-between;
      font-size: 11px;
      padding-bottom: 25px;
      p:nth-child(1) {
        font-size: 15px;
      }
    }
    div:nth-child(3) {
      flex: 1;
      padding-top: 3px;
      button {
        width: 60px;
        height: 24px;
        border-radius: 10px;
        border: 1px solid white;
        color: white;
        background-color: #2185d0;
      }
    }
  }
  main {
    flex: 1;
    overflow-y: auto;
    padding: 0 9px;
    .evaluate {
      width: 100%;
      height: 86px;
      border-bottom: 1px dashed #f6f6f6;
      display: flex;
      padding: 27px 9px 20px 30px;
      div:nth-child(1),
      div:nth-child(2) {
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-between;
        span {
          color: #2185d9;
        }
        p {
          color: #999;
        }
      }
      div:nth-child(3) {
        flex: 1.5;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-between;
        p {
          color: #999;
          span {
            color: #2185d9;
          }
        }
        section {
          color: #ffc83d;
        }
      }
    }
    .chat {
      width: 100%;
      height: 123px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 5px;
      .chat_top {
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        p:nth-child(2) {
          padding-left: 10px;
        }
      }
      .chat_center {
        flex: 1;
        width: 100%;
        border-radius: 10px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        padding: 0 15px 0 10px;
        i {
          font-size: 80px;
          flex: 3;
          color: #666;
        }
        p:nth-child(2) {
          flex: 9;
          padding-left: 8px;
        }
        p:nth-child(3) {
          flex: 3;
          color: #ff0000;
        }
        img {
          height: 15px;
        }
      }
    }
    .Professional_skills {
      width: 100%;
      display: flex;
      flex-direction: column;
      .Professional_skills_top {
        height: 61px;
        line-height: 61px;
        font-size: 16px;
      }
      .Professional_skills_center {
        flex: 1;
        justify-content: space-between;
        display: flex;
        flex-wrap: wrap;
        span {
          width: 25%;
          text-align: center;
          padding: 5px 0;
          color: #2185d0;
        }
      }
    }
    .Personal_profile {
      flex: 1; 
      display: flex;
      flex-direction: column;
      .Personal_profile_top {
        height: 44px;
        line-height: 44px;
        font-size: 16px;
      }
      .Personal_profile_center {
        flex: 1;
        color: #999;
      }
    }
  }
}
</style>
