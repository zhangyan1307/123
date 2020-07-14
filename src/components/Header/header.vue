<template>
    <div class='header'>
         {{title}}
    </div>
</template>

<script>
    export default {
        props:["title"],
    }
</script>

<style lang="less" scoped>
.header{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}
</style>