<template>
<div id="hheader">
    <h2>{{msg}}</h2>
    <p>
        <em>Simple Todo List with adding and filter by diff status.</em>
    </p>
</div>
</template>

<script>
export default {
    name: 'hheader',
    props: {
        msg: String,
    }
}
</script>
