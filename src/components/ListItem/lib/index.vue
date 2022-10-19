<script setup>
import vColor from '../../../directives/Color/lib/script.js';
</script>

<template>
    <div
        v-color="{textColor: 'white', backgroundColor: 'neutral'}"
    > 
        <slot name="item"></slot>
    </div>
</template>
