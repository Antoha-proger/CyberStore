<script setup>
import CategoryButton from '@/components/blocks/home/CategoryButton.vue'
import { useHomeStore } from '@/stores/homeStore'

const homeStore = useHomeStore()
</script>

<template>
    <div class="container mx-auto px-8 h-850 pt-12">
        <h2 class="text-base-grey text-4xl font-semibold mb-7">Категории</h2>
        <div class="w-1140 gap-x-5 flex overflow-hidden overflow-x-scroll pb-3.5">
            <CategoryButton v-for="({ name, eng_name }) in homeStore.categories" :key="eng_name" :text="name" :alt_text="eng_name"/>
        </div>
        <div class=""></div>
    </div>
</template>

<style lang="css" scoped>
::-webkit-scrollbar {
    height: 8px
}

::-webkit-scrollbar-thumb {
  background: #9FA194;
  border-radius: 15px;
}
</style>