<template>
  <div class="appointmentExamination">
    <nav>
      <top :title="title"></top>
    </nav>
    <main>
       <router-view></router-view>
    </main>
  </div>
</template>

<script>
import top from "../../../../components/Header/header.vue";
export default {
  components: {
    top,
  },
  data() {
    return {
      title: "体检预约",
    };
  },
};
</script>

<style lang="less" scoped>
.appointmentExamination {
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
  }
}
</style>
