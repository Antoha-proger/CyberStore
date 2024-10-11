<script setup>
defineProps(['text', 'alt_text'])
</script>

<template>
    <button :value="alt_text" class="transition-colors whitespace-nowrap flex-auto px-5  h-8 border text-base-grey border-base-grey rounded-3xl hover:bg-base-orange hover:text-white hover:border-base-orange focus:bg-base-orange focus:text-white focus:border-base-orange">{{ text }}</button>
</template>