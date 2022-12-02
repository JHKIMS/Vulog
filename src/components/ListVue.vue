<template>
    <div>
        <h5 @click="$router.push('/detail/0')">{{blogWrite[0].title}}</h5>
        <p>{{blogWrite[0].date}}</p>
    </div>
    <div>
        <h5>블로그 글 제목</h5>
        <p>글 내용</p>
    </div>
    <div>
        <h5>블로그 글 제목</h5>
        <p>글 내용</p>
    </div>
</template>
<script>
export default {
    props : {
        blogWrite: Array,
    }
}
</script>
<style lang="">
    
</style>