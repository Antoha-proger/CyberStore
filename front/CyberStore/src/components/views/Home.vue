<script setup>
import Navigation from '@/components/Navigation.vue'
import Hero from '@/components/blocks/home/Hero.vue'
import Categories from '@/components/blocks/home/Categories.vue'
import FavoriteMenu from '../menu/FavoriteMenu.vue';
import { onMounted } from 'vue';
import { useGamesStore } from '../../stores/gamesStore';
import { useHomeStore } from '../../stores/homeStore';

const gamesStore = useGamesStore()
const homeStore = useHomeStore()

onMounted(() => {
    gamesStore.fetchAll()
})
</script>

<template>
    <div class="w-full bg-base-dark ">
        <Navigation />
        <Hero />
        <Categories :games="gamesStore.games"/>
        <FavoriteMenu v-if="homeStore.isFavouritesMenuOpen"/>
    </div>
</template>