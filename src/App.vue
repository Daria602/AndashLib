<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <List :items="[{label: 'First List Item'}, {label: 'Second List Item'}]"/>
</template>

<script setup>
import List from './components/List/lib/index.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style src="../public/style/global.css">
</style>