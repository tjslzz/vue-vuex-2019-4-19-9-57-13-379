<template>
<div id="app">
    <div id="app_img"><img alt="Vue logo" src="./assets/logo.png"></div>
    <div id="container">
        <Header/>
        <Body/>
        <Footer/>
    </div>
</div>
</template>

<script>
import Header from "./components/header.vue";
import Body from './components/body.vue';
import Footer from './components/footer.vue';
export default {
    name: 'app',
    components: {
        Header,
        Body,
        Footer
    }
}
</script>

<style>
@import url('./static_css/app.css');
</style>
