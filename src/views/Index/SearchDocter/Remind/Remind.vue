<template>
  <div class="remind">
    <nav>
      <top :title="'导诊提醒'"></top>
    </nav>
    <main>
      <div class="time">
        <div class="time_top">
          <i class="iconfont icon-tixing"></i>
          <span>检查提醒</span>
        </div>
        <div class="time_bottom">
          您当前排队序号前方排队人数1人,预计还需要
          20分钟，请合理安排时间及时到3楼检验科CT 扫描检查室等候。
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
  }
};
</script>

<style lang="less" scoped>
.remind {
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
    overflow-y: auto;
    background-color: #f3f3f3;
    padding: 10px 7px;
    .time {
      width: 100%;
      height: 141px;
      background-color: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      padding: 18px 19px;
      .time_top {
        flex: 1;
        display: flex;
        align-items: center;
        padding-bottom: 9px;
        border-bottom: 1px solid #f3f3f3;
        i {
          color: #f99e07;
        }
        span {
          padding-left: 5px;
        }
      }
      .time_bottom {
        flex: 3;
        font-size: 15px;
        line-height: 25px;
      }
    }
  }
}
</style>
