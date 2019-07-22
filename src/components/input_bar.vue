<template>
<div id="input_bar">
    <input type="text" v-model="item" class="input-text" @keyup.enter="$store.commit('push',item)">
    <button @click="$store.commit('push',item)">add</button>
</div>
</template>

<script>
export default {
    name: 'input_bar',
    data() {
        return {
            item: ""
        }
    }
}
</script>
