<template>
<li id="list_item" v-bind:class="{checked:item.checked}">
    <input type="checkbox" v-model="item.checked">
    <span @dblclick="editable" @keydown.enter="updatable" ref="info">{{ item.value }}</span>
</li>
</template>

<script>
export default {
    name: 'list_item',
    props: {
        item: Object
    },
    methods: {
        editable() {
            this.$refs.info.setAttribute("contenteditable", "true");
        },
        updatable() {
            this.$refs.info.setAttribute("contenteditable", "false");
            this.item.value=this.$refs.info.innerHTML;
        }
    }
}
</script>
