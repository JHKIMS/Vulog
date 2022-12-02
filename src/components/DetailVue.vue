<template>
    <div>
        <h4>DetailVuePage</h4>
        <h5>{{blogWrite[$route.params.myCustom].title}}</h5>
        <p>{{blogWrite[$route.params.myCustom].content}}</p>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    props : {
        blogWrite: Array,
    }
}
</script>
<style>
    
</style>
