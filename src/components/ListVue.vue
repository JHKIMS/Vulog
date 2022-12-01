<template>
    <div>
        <h5>{{blogPost[0].title}}</h5>
        <p>{{blogPost[0].date}}</p>
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
    name: 'ListVue',
    props : {
        blogPost: Array,
    }
}
</script>
<style lang="">
    
</style>