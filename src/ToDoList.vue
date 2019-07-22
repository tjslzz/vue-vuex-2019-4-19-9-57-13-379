<template>
<div id="app">
    <div id="app_img"><img alt="Vue logo" src="./assets/logo.png"></div>
    <div id="container">
        <Header msg="Vue To Do List" />
        <Body :model="model"/>
        <Footer @all="all" @active="active" @complete="complete"/>
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
            model:"all"
        }
    },
    components: {
        Header,
        Body,
        Footer
    },
    methods: {
        all: function () {
            this.model = "all";
        },
        active: function () {
            this.model = "active";
        },
        complete: function () {
            this.model = "complete";
        }
    }
}
</script>

<style>
@import url('./static_css/app.css');
</style>
