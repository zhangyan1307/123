<template>
  <div class="chooseExpert">
    <nav><top :title="title"></top></nav>
    <!-- 搜索框 -->
    <div class="search">
      <input
        type="text"
        placeholder="请输入专家名字"
        @input="input"
        v-model="value"
      />
      <i class="iconfont icon-search1"></i>
      <i class="iconfont icon-close" v-if="close" @click="clear"></i>
    </div>
    <!-- 专家信息区域 -->
    <main>
      <div
        class="expert_info"
        v-for="(item, index) in expertInfo"
        :key="index"
        @click="pushGeneralInformationOfDoctors"
      >
        <div class="expert_true_info">
          <div class="header_pic"></div>
          <div class="intro">
            <div class="intro_name_job">
              <div class="intro_name">{{ item.expertName }}</div>
              <div class="intro_job">{{ item.experJob }}</div>
            </div>
            <div class="section">{{ item.section }}</div>
            <div class="intro_true">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import top from "../../../../components/Header/header.vue";
export default {
  components: {
    top
  },
  data() {
    return {
      title: "选择专家",
      value: "", //输入框值,
      close: false, //输入框显示标识
      expertInfo: [
        {
          expertName: "张三",
          experJob: "科员",
          section: "组织部",
          content:
            "你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷"
        },
        {
          expertName: "李四",
          experJob: "部长",
          section: "纪检部",
          content:
            "你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子"
        },
        {
          expertName: "王五",
          experJob: "厅长",
          section: "公安部",
          content:
            "你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子"
        },
        {
          expertName: "张三",
          experJob: "科员",
          section: "组织部",
          content:
            "你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷"
        },
        {
          expertName: "李四",
          experJob: "部长",
          section: "纪检部",
          content:
            "你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子"
        },
        {
          expertName: "王五",
          experJob: "厅长",
          section: "公安部",
          content:
            "你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子你儿子"
        }
      ] //搜索的专家信息
    };
  },
  methods: {
    //监听输入框事件，当输入框没有值的时候关闭图标消失
    input() {
      if (this.value) {
        this.close = true;
      } else {
        this.close = false;
      }
    },
    //清空输入kuang
    clear() {
      this.value = "";
      this.close = false;
    },
    //跳转到医生综合信息组件
    pushGeneralInformationOfDoctors() {
      this.$router.push({
        path: "/GeneralInformationOfDoctors"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.chooseExpert {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    width: 100%;
    height: 40px;
  }
  .search {
    width: 100%;
    height: 45px;
    background-color: #f3f3f3;
    padding: 7px 11px;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      text-indent: 2em;
    }
    .icon-search1 {
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
    }
    .icon-close {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
    }
  }
  main {
    flex: 1;
    overflow-y: auto;
    .expert_info {
      width: 100%;
      height: 129px;
      padding: 8px;
      .expert_true_info {
        width: 100%;
        height: 100%;
        border-bottom: 1px dashed #f3f3f3;
        display: flex;
        .header_pic {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: skyblue;
        }
        .intro {
          width: 299px;
          height: 100px;
          padding-left: 15px;
          font-size: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .intro_name_job {
            display: flex;
            justify-content: space-between;
            padding: 0 171px 0 0;
            .intro_name {
              font-size: 17px;
            }
            .intro_job {
              font-size: 13px;
              align-self: center;
            }
          }
          .section {
            color: #666;
          }
          .intro_true {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; // 控制多行的行数
            -webkit-box-orient: vertical;
            color: #999;
            font-size: 11px;
          }
        }
      }
    }
  }
}
</style>
