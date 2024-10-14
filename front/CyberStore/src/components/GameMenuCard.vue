<script setup>
import { ref } from 'vue';
import { useHomeStore } from '../stores/homeStore';
defineProps(['image', 'title', 'price', 'id'])


const homeStore = useHomeStore()
</script>

<template>
    <div class="w-150 max-h-350 h-350 flex justify-between flex-col" :id="id">
        <div class="flex transition delay-50 relative mb-4 w-150 h-225 hover:before:bg-base-grey hover:before:w-150 hover:before:h-225 hover:before:block hover:before:absolute hover:before:inset-0 hover:before:opacity-70 hover:before:rounded-xl hover:before:cursor-pointer group">
            <svg @click="homeStore.deleteFavoriteGame(id)" class="hidden opacity-100 cursor-pointer absolute top-3.5 z-10 right-3.5 group-hover:block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6.17647H20M9 3H15M15.5 21H8.5C7.39543 21 6.5 20.0519 6.5 18.8824L6.0434 7.27937C6.01973 6.67783 6.47392 6.17647 7.04253 6.17647H16.9575C17.5261 6.17647 17.9803 6.67783 17.9566 7.27937L17.5 18.8824C17.5 20.0519 16.6046 21 15.5 21Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round"/>
            </svg>

            <div class="absolute inset-0  opacity-100 cursor-pointer group flex justify-center items-center">
                <button class="w-36 h-9 rounded-xl border-base-dark text-base-dark hover:bg-base-dark hover:text-white text-xl hidden border group-hover:block">В корзину</button>
            </div>

            <img class="rounded-xl w-150 h-225 object-cover" :src="image" alt="game image">
        </div>
        
        <h4 class="text-base-dark text-xl font-semibold mb-4">{{ title }}</h4>
        <p class="text-base-dark text-xl font-medium">{{ price }} ₽</p>
    </div>
</template>