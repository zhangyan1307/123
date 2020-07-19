<template>
  <div class="Appointment_information">
    <div class="gray"></div>
    <main>
      <van-cell title="体检医院：" value="测试医院" />
      <van-cell title="体检类型：" value="入职体检" />
      <van-field
        readonly
        clickable
        name="calendar"
        :value="value"
        label="预约日期"
        placeholder="请选择"
        @click="showCalendar = true"
      />
      <van-calendar v-model="showCalendar" @confirm="onConfirm" />
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="valuetime"
        label="预约时间"
        placeholder="请选择"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="time"
          @confirm="onConfirmtime"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-cell title="价格：" value="99" />
      <van-cell title="项目：" value="入职体检" />
      <van-cell title="时长：" value="30分钟" />
      <van-cell title="支持：" value="测试医院" />
      <van-cell title="适用：" value="适用所有人员" />
      <van-button type="info">立即付款</van-button>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      showCalendar: false,
      valuetime: "",
      showPicker: false
    };
  },
  methods: {
    onConfirm(date) {
      this.value = `${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    },
    onConfirmtime(time) {
      this.valuetime = time;
      this.showPicker = false;
    }
  }
};
</script>

<style lang="less" scoped>
.Appointment_information {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .gray {
    width: 100%;
    height: 9px;
    background-color: #f3f3f3;
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    .van-button {
      width: 90%;
      border-radius: 10px;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
