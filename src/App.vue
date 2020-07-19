<template>
  <div id="app" style="font-size:13px;">
    <Loading v-show="LOADING"></Loading>
    <router-view/>
  </div>
</template>

<script>
import Loading from '@/components/Loading/Loading.vue';
import { mapState } from 'vuex';
export default {
  components: {
		Loading
	},
	computed: {
		...mapState(['LOADING'])
	},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
input{
   outline: none;
   border: 1px solid #fff;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1927372_m5u5w0c1wt.eot?t=1594868712108'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1927372_m5u5w0c1wt.eot?t=1594868712108#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1927372_m5u5w0c1wt.woff?t=1594868712108') format('woff'),
  url('//at.alicdn.com/t/font_1927372_m5u5w0c1wt.ttf?t=1594868712108') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1927372_m5u5w0c1wt.svg?t=1594868712108#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-id-card:before {
  content: "\e6d7";
}

.icon-StarFilled:before {
  content: "\e64f";
}

.icon--zhensuoguanli:before {
  content: "\e726";
}

.icon-location:before {
  content: "\e611";
}

.icon-shouji:before {
  content: "\e62c";
}

.icon-tixing:before {
  content: "\e600";
}

.icon-user1:before {
  content: "\e609";
}

.icon-close:before {
  content: "\e766";
}

.icon-search1:before {
  content: "\e680";
}

.icon-user:before {
  content: "\e622";
}

.icon-yiyuan:before {
  content: "\e629";
}

.icon-search:before {
  content: "\e777";
}

</style>
