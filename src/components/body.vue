<template>
<div id="bbody">
    <InputBar/>
    <ListContainer/>
</div>
</template>

<script>
import InputBar from './input_bar.vue';
import ListContainer from './list_container.vue';
export default {
    name: 'bbody',
    components: {
        InputBar,
        ListContainer
    }
}
</script>
