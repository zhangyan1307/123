<template>
  <div class="Add_Visitors">
    <nav>
      <top :title="'添加就诊人'"></top>
    </nav>
    <van-form @submit="onSubmit">
      <van-field
        v-model="query.name"
        label="姓名"
        name="username"
        placeholder="请输入就诊人姓名"
      />
      <van-field label="患者类型" name="type">
        <template #input>
          <van-radio-group v-model="query.type" direction="horizontal">
            <van-radio name="1">成人</van-radio>
            <van-radio name="2">儿童</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field label="性别" name="sex">
        <template #input>
          <van-radio-group v-model="query.sex" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
          v-model="query.nation"
          label="民族"
          placeholder="请输入就诊人民族"
          name="nation"
        />
      <div v-if="query.type == '1'">
        <van-field
          v-model="query.ID_Number"
          label="身份证号码"
          placeholder="请输入就诊人身份证号码"
          name="id_card"
        />
        <van-field
          v-model="query.Card_Number"
          label="就诊卡号"
          placeholder="请输入就诊人就诊卡号"
          name="card_number"
        />
      </div>
      <div v-if="query.type=='2'">
          <van-field
          v-model="query.age"
          label="年龄"
          placeholder="请输入就诊人年龄"
          name="age"
        />
          <van-field
          v-model="query.jian_name"
          label="监护人姓名"
          placeholder="请输入监护人姓名"
          name="jian_name"
        />
          <van-field
          v-model="query.relative"
          label="与监护人的关系"
          placeholder="请输入与监护人的关系"
          name="relative"
        />
          <van-field
          v-model="query.ID_Number"
          label="监护人身份证号码"
          placeholder="请输入监护人身份证号码"
          name="id_card"
        />
      </div>
      <div class="button">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
    </van-form>
  </div>
</template>

<script>
import top from "@/components/Header/header";
export default {
  data() {
    return {
      query: {
        name: "",
        type: "1",
        sex: "1",
        nation: "",
        ID_Number: "",
        Card_Number: "",
        age:"",
        jian_name:"",
        relative:""
      },
      username: "",
      password: ""
    };
  },
  components: {
    top
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    }
  }
};
</script>

<style lang="less" scoped>
.Add_Visitors {
  width: 100%;
  height: 100%;
  nav {
    width: 100%;
    height: 40px;
  }
  .button{
      width: 90%;
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
  }
}
</style>
