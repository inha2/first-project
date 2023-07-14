<template>
    <div id="root">
        <!-- <Header /> -->
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './layouts/Header.vue'

export default {
    components: {
        Header,
    },
}
</script>

<style></style>
