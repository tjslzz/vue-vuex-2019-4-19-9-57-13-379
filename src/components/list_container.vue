<template>
<div id="to_do_list">
    <ol>
        <Item v-for="(item) in list" :key="item.id" :item="item" />
    </ol>
</div>
</template>

<script>
import Item from "./list_item.vue";
export default {
    name: 'to_do_list',
    data() {
        return {
            list: []
        }
    },
    props: {
        model: {
            type: String,
            default: () => "all"
        }
    },
    components: {
        Item
    },
    mounted() {
        this.list = this.$store.getters.getList();
    },
    watch: {
        model() {
            switch(this.model){
                case "all" : this.list = this.$store.getters.getList();break;
                case "active" : this.list = this.$store.getters.getList().filter(i => !i.checked);break;
                case "complete" : this.list = this.$store.getters.getList().filter(i => i.checked);break;
            }
        }
    }
}
</script>
