<script setup>
import vColor from '../../../directives/Color/lib/script.js';
import vBorder from '../../../directives/Border/lib/script.js';
</script>

<template>
    <div
        v-color="{textColor: 'white', backgroundColor: 'neutral'}"
        v-border="{width: '1px', color: 'red', style: 'solid'}"
    > 
        <slot name="item"></slot>
    </div>
</template>
