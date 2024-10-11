<script setup>
import { useHomeStore } from '@/stores/homeStore'

const homeStore = useHomeStore()
</script>

<template>
    <div class="px-8 h-600 container flex justify-between mx-auto items-center">
        <div class="flex gap-x-16">
            <div class="flex flex-col gap-y-6">
                <input class="invisible peer/one" checked type="radio" name="slide" id="slide1" @click="homeStore.heroActiveTab = 0">
                <label class="cursor-pointer w-4 h-4 border-2 rounded-xl border-base-grey peer-checked/one:bg-base-grey" for="slide1"></label>

                <input class="invisible peer/two" type="radio" name="slide" id="slide2" @click="homeStore.heroActiveTab = 1">
                <label class="cursor-pointer w-4 h-4 border-2 rounded-xl border-base-grey peer-checked/two:bg-base-grey" for="slide2"></label>

                <input class="invisible peer/three" type="radio" name="slide" id="slide3" @click="homeStore.heroActiveTab = 2">
                <label class="cursor-pointer w-4 h-4 border-2 rounded-xl border-base-grey peer-checked/three:bg-base-grey" for="slide3"></label>
            </div>
            <div class="flex flex-col ">
                <h3 class="text-base-grey text-3xl font-medium mb-8">{{ homeStore.getHeroCurrentTitle }}</h3>
                <p class="text-base-grey max-w-md text-xl">{{ homeStore.getHeroCurrentDescr }}</p>
            </div>
        </div>
        <div class="">
            <img src="@/assets/image/heroImage1.png" alt="hero image" width="450" height="450">
        </div>
    </div>
</template>