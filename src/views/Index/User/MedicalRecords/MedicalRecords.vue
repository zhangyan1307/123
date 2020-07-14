<template>
    <div class="MedicalRecords"> 
        <nav>
            <top :title="'就诊记录'"></top>
        </nav>
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
.MedicalRecords{
    width: 100%;
    height: 100%;
    nav{
        width: 100%;
        height: 64px;
    }
}
</style>