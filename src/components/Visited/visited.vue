<template>
  <div class="Visited">
    <div
      class="Visited_container"
      v-for="(item, index) in Reserved"
      :key="index"
    >
      <div class="Visited_container_left">
        <p>科室：{{ item.room }}</p>
        <p>日期：{{ item.data }}</p>
      </div>
      <div class="Visited_container_center">
        <p>医生：{{ item.docter }}</p>
        <p>
          金额：￥<span>{{ item.price }}</span>
        </p>
      </div>
      <div class="Visited_container_right">
        <button :disabled="true">
          已就诊
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Reserved: [
        {
          room: "科室1",
          data: "2020-07-09",
          docter: "张炎",
          price: 88,
        },
        {
          room: "科室2",
          data: "2020-07-08",
          docter: "张梓奇",
          price: 188,
        },
        {
          room: "科室3",
          data: "2020-07-07",
          docter: "付文娟",
          price: 199,
        },
        {
          room: "科室4",
          data: "2020-07-06",
          docter: "科比",
          price: 388,
        },
        {
          room: "科室1",
          data: "2020-07-05",
          docter: "张炎大爷",
          price: 488,
        },
        {
          room: "科室1",
          data: "2020-07-05",
          docter: "张炎大爷",
          price: 488,
        },
        {
          room: "科室1",
          data: "2020-07-05",
          docter: "张炎大爷",
          price: 488,
        },
        {
          room: "科室1",
          data: "2020-07-05",
          docter: "张炎大爷",
          price: 488,
        },
        {
          room: "科室1",
          data: "2020-07-05",
          docter: "张炎大爷",
          price: 488,
        },
        {
          room: "科室1",
          data: "2020-07-05",
          docter: "张炎大爷",
          price: 488,
        },
        {
          room: "科室1",
          data: "2020-07-05",
          docter: "张炎大爷",
          price: 488,
        },
        {
          room: "科室1",
          data: "2020-07-05",
          docter: "张炎大爷",
          price: 488,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.Visited {
  width: 100%;
  height: 100%;
  padding: 10px 10px 0 10px;
  .Visited_container {
    width: 100%;
    height: 69px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    padding: 17px 11px;
    color: #666666;
    .Visited_container_left {
      flex: 1.5;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .Visited_container_center {
      flex: 1.5;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span {
        color: red;
      }
    }
    .Visited_container_right {
      flex: 1;
      display: flex;
      justify-content: center;
      button {
        width: 75px;
        height: 28px;
        background-color: #eaeaea;
        border-radius: 10px;
        align-self: center;
        border: none;
      }
    }
  }
}
</style>
