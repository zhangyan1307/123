<template>
  <div class="Detailed_Report">
    <nav>
      <top :title="'检验报告'"></top>
    </nav>
    <main>
      <div class="report">
          <div class="top">
              总蛋白(TP)
          </div>
          <div class="center">
              <p class="doctor"><span>就诊人：科比</span><span>开发医生：张炎</span></p>
              <p>性别：男</p>
              <p>开发诊室：内科</p>
              <p>申请诊室：外科</p>
              <p>报告时间：2020-07-05</p>
          </div>
          <div class="bottom">
              <div class="bottom_top">
                  <p class="res">标本名称</p>
                  <p>静脉血</p>
              </div>
              <div class="bottom_bottom">
                  <p class="res">检验结果</p>
                  <p>结果标志：正常</p>
                  <p>检验数值：63.7/L</p>
                  <p class="gray">参考标准（60 — 80）g/L</p>
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
.Detailed_Report {
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
    padding: 10px;
    .report{
        width: 100%;
        height: 438px;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 16px 10px 25px 10px;
        .top{
            flex: 1;
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px dashed #ccc;
        }
        .center{
            flex: 4;
            border-bottom: 1px dashed #ccc;
            font-size: 13px;
            color: #333;
            padding: 19px 0 17px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .doctor{
                display: flex;
                justify-content: space-between;
                padding-right: 53px;
            }
        }
        .bottom{
            flex: 4;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 23px 6px 0 6px;
            .bottom_top{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                color: #999;
                .res{
                    font-size: 15px;
                    color: #333;
                }
            }
            .bottom_bottom{
                padding-top: 40px;
                flex: 2;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .res{
                    font-size: 15px;
                    color: #333;
                }
                .gray{
                    color: #999;
                }
            }
        }
    }
  }
}
</style>
