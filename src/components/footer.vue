<template>
<ul id="ffooter">
    <li><a href="#" @click="all" :class="{ selected: model==1 }">ALL</a></li>
    <li><a href="#" @click="active" :class="{ selected: model==2 }">Active</a></li>
    <li><a href="#" @click="complete" :class="{ selected: model==3 }">Complete</a></li>
</ul>
</template>

<script>
let all = function() {
    return this.$store.getters.getList();
}
let active = function(){
    return this.$store.getters.getList().filter(i => !i.checked);
}
let complete = function(){
    return this.$store.getters.getList().filter(i => i.checked);
}
export default {
    name: 'ffooter',
    data: () => {
        return {
            model: 0
        }
    },
    methods: {
        all() {
            this.$emit('filter_list',all);
            this.model = 1
        },
        active() {
            this.$emit('filter_list',active);
            this.model = 2
        },
        complete() {
            this.$emit('filter_list',complete);
            this.model = 3
        }
    }
}
</script>
