<template>
<div id="to_do_list">
    <ol>
        <Item v-for="(item) in $store.getters.getList()" :key="item.id" :item="item" />
    </ol>
</div>
</template>

<script>
import Item from "./list_item.vue";
export default {
    name: 'to_do_list',
    components: {
        Item
    }
}
</script>
