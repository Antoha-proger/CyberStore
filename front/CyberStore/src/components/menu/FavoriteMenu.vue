<script setup>
import { useHomeStore } from '../../stores/homeStore';
import GameMenuCard from '../GameMenuCard.vue';

const homeStore = useHomeStore()
</script>

<template>
    <div class="h-screen w-600 fixed bg-light-grey top-0 right-0 z-20 overflow-y-scroll">
        <div class="pt-4 pl-4 h-17 border-b border-base-brown">
            <button @click="homeStore.isFavouritesMenuOpen = false" class="text-base-dark">Закрыть</button>
            <div class="flex justify-center mb-1.5">
                <h3 class="font-semibold text-2xl text-base-dark">Избранное</h3>
            </div>
        </div>
        <div class="grid gap-y-12 grid-cols-3 pt-4 pl-4" >
                <GameMenuCard v-for="item in homeStore.favoritesGameList" :key="item.id" :image="item.image" :title="item.title" :price="item.price" :id="item.id"/>
        </div>
    </div>
</template>
