<script setup>
/* eslint-disable */
import ListItem from '../../ListItem/lib/index.vue';
const props = defineProps({
  items: {
    type: Array,
    default: []
  }
});

function showSomething(something) {
    console.log(something);
};
</script>

<template>
    <div
        @click="showSomething()"
    > 
        Hello 
    </div>
    <div
        v-for="listItem in items"
    >
        <ListItem>
            <template #item>
                {{ listItem.label }}
            </template>
        </ListItem>
    </div>
</template>
