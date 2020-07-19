<template>
  <div class="Detail">
    <nav>
      <top :title="'检查报告'"></top>
    </nav>
    <main>
      <div class="Detail_container">
        <div class="Detail_container_top">
          (省) CT检查：头颅（平扫）
        </div>
        <div class="Detail_container_center">
          <div>
            <p><span>就诊人：</span>科比</p>
            <p><span>开方医生：</span>张炎</p>
          </div>
          <div>
            <p><span>性别：</span>男</p>
            <p><span>年龄：</span>42</p>
          </div>
          <p><span>开方诊室：</span>内科</p>
          <p><span>报告时间：</span>2020-10-10 5:30</p>
        </div>
        <div class="Detail_container_bottom">
            <div>
                <p>检查方法</p>
                <p>平扫显示两侧肾上腺形态</p>
            </div>
            <div>
                <p>检查结果</p>
                <p>正常</p>
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
  }
};
</script>

<style lang="less" scoped>
.Detail {
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
    padding: 10px 7px;
    .Detail_container {
      width: 100%;
      height: 364px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      .Detail_container_top {
        flex: 1;
        border-bottom: 1px dashed #999;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .Detail_container_center {
        flex: 4;
        display: flex;
        flex-direction: column;
        border-bottom: 1px dashed #999;
        justify-content: space-around;
        font-size: 12px;
        span{
            font-size: 13px;
            color: #666;
        }
        div:nth-child(1){
            display: flex;
            justify-content: space-between;
            padding-right: 59px;
        }
        div:nth-child(2){
            display: flex;
            justify-content: space-between;
            padding-right: 100px;

        }
      }
      .Detail_container_bottom {
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        p:nth-child(1){
            font-size: 15px;
        }
        p:nth-child(2){
            color: #999;
        }
      }
    }
  }
}
</style>
