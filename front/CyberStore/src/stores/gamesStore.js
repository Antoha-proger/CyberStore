import axios from "axios";
import { defineStore } from "pinia";
import { ref, computed, reactive } from 'vue'

export const useGamesStore = defineStore('games', () => {
    const games = ref([])

    async function fetchAll() {
        try {
            const data = await axios.get('http://localhost:3000/games')
            games.value = await data.data.slice(0, 21)
            console.log(games.value);
            
        } catch(err) {
            console.log(err);
            
        }
    }

    return {
        games,
        fetchAll
    }
})