<template>
    <div class="Outpatient_list">
           <nav>
               <top :title="'门诊清单'"></top>
           </nav>
           <main></main>
    </div>
</template>

<script>
import top from '@/components/Header/header'
    export default {
      components:{
          top,
      }  
    }
</script>

<style lang="less" scoped>
.Outpatient_list{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    nav{
        width: 100%;
        height: 64px;
    }
    main{
        background-color: #f3f3f3;
        flex: 1;
    }
}
</style>