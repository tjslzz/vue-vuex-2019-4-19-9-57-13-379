<template>
<ul id="ffooter">
    <li><a href="#" @click="$emit('all');model=1" :class="{ selected: model==1 }">ALL</a></li>
    <li><a href="#" @click="$emit('active');model=2" :class="{ selected: model==2 }">Active</a></li>
    <li><a href="#" @click="$emit('complete');model=3" :class="{ selected: model==3 }">Complete</a></li>
</ul>
</template>

<script>
export default {
    name: 'ffooter',
    data:()=>{
        return{
            model:0
        }
    }
}
</script>
