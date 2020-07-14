<template>
  <div class="PackageItems">
    <div class="PackageItems_number">
      <div class="number">套餐项(15项)</div>
    </div>
    <div class="container_box">
      <div class="container">
        <div class="container_type">1.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">1.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">1.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">1.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">1.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">1.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">1.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">1.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
      <div class="container">
        <div class="container_type">2.普通检查（身高、体重、血压）</div>
        <div class="container_info">测量身高、称重</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.PackageItems {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .PackageItems_number {
    width: 100%;
    height: 52px;
    border-bottom: 1px dashed #ccc;
    padding: 19px 0 0 9px;
    .number {
      border-left: 7px solid #32c5bd;
      padding-left: 7px;
      font-size: 15px;
    }
  }
  .container_box {
    display: flex;
    flex-direction: column;
    flex: 1;
    .container {
      width: 95%;
      height: 43px;
      border-bottom: 1px dashed #ccc;
      align-self: center;
      padding: 0 0 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-self: center;
      .container_info {
        color: #999;
      }
    }
  }
}
</style>
