<template>
<ul id="ffooter">
    <li><a href="#" @click="all" :class="{ selected: $store.getters.getModel()==1 }">ALL</a></li>
    <li><a href="#" @click="active" :class="{ selected: $store.getters.getModel()==2 }">Active</a></li>
    <li><a href="#" @click="complete" :class="{ selected: $store.getters.getModel()==3 }">Complete</a></li>
</ul>
</template>

<script>
export default {
    name: 'ffooter',
    methods: {
        all() {
            this.$store.commit('setModel', 1);
        },
        active() {
            this.$store.commit('setModel', 2);
        },
        complete() {
            this.$store.commit('setModel', 3);
        }
    }
}
</script>
