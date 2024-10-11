<script setup>
import Navigation from '@/components/Navigation.vue'
import Hero from '@/components/blocks/home/Hero.vue'
import Categories from '@/components/blocks/home/Categories.vue'
import { onMounted } from 'vue';
import { useGamesStore } from '../../stores/gamesStore';

const gamesStore = useGamesStore()

onMounted(() => {
    gamesStore.fetchAll()
})
</script>

<template>
    <div class="w-full bg-base-dark ">
        <Navigation />
        <Hero />
        <Categories :games="gamesStore.games"/>
    </div>
</template>