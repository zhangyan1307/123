<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  src: url('//at.alicdn.com/t/font_1927372_hv7470x6g4o.eot?t=1594606931131'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1927372_hv7470x6g4o.eot?t=1594606931131#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1927372_hv7470x6g4o.woff?t=1594606931131') format('woff'),
  url('//at.alicdn.com/t/font_1927372_hv7470x6g4o.ttf?t=1594606931131') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1927372_hv7470x6g4o.svg?t=1594606931131#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
