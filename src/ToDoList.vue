<template>
<div id="app">
    <div id="app_img"><img alt="Vue logo" src="./assets/logo.png"></div>
    <div id="container">
        <Header msg="Vue To Do List" />
        <Body :model="model"/>
        <Footer @filter_list="filter_list"/>
    </div>
</div>
</template>

<script>
import Header from "./components/header.vue";
import Body from './components/body.vue';
import Footer from './components/footer.vue';
export default {
    name: 'app',
    data: () => {
        return {
            model:Function
        }
    },
    components: {
        Header,
        Body,
        Footer
    },
    methods: {
        filter_list: function (func) {
            this.model = func;
        }
    }
}
</script>

<style>
@import url('./static_css/app.css');
</style>
