<template>
<div id="bbody">
    <InputBar/>
    <ListContainer :model="model"/>
</div>
</template>

<script>
import InputBar from './input_bar.vue';
import ListContainer from './list_container.vue';
export default {
    name: 'bbody',
    props: {
        model: {
            type: Function
        }
    },
    components: {
        InputBar,
        ListContainer
    }
}
</script>
