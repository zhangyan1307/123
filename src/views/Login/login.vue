<template>
  <div class="login">
    <nav>
      <top :title="'登入'"></top>
    </nav>
    <main>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="button">
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </main>
  </div>
</template>

<script>
import top from "@/components/Header/header";
export default {
  components: {
    top
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    width: 100%;
    height: 64px;
  }
  main {
    flex: 1;
    padding: 100px 10px;
    .button{
        width: 100%;
        height: 50px;
    }
  }
}
</style>
