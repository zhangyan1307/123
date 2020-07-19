<template>
  <div class="InspectionReport">
    <nav>
      <top :title="'选卡'"></top>
    </nav>
    <main>
      <outpatientpayment :type="2"></outpatientpayment>
    </main>
  </div>
</template>

<script>
import top from "@/components/Header/header";
import outpatientpayment from '@/views/Index/SearchDocter/OutpatientPayment/OutpatientPayment'//引入选卡组件
export default {
  components: {
    top,
    outpatientpayment
  }
};
</script>

<style lang="less" scoped>
.InspectionReport {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav{
      width: 100%;
      height: 40px;
  }
  main{
      flex: 1;
  }
}
</style>
