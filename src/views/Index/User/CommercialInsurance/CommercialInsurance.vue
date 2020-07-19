<template>
    <div class="commercial_insurance">
      <nav>
          <top :title="'商业保险'"></top>
      </nav>
      <main>
          
      </main>
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
.commercial_insurance{
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