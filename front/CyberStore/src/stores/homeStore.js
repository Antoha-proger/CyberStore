import { defineStore } from "pinia";
import { ref, computed, reactive } from 'vue'

export const useHomeStore = defineStore('home', () => {
    const isFavouritesMenuOpen = ref(false)

    let favoritesGameList = ref([])

    function addFavoriteGame(game) {
        
        for (let item of favoritesGameList.value) {
            if (game.id === item.id) {
                deleteFavoriteGame(game.id)
                return
            }
        }
        
        favoritesGameList.value.push(game)
        console.log(favoritesGameList.value);
        
    }

    function deleteFavoriteGame(id) {
        console.log(id);
        
        for (let item of favoritesGameList.value) {
            if (id === item.id) {
                favoritesGameList.value = favoritesGameList.value.filter((point) => point !== item)
                return
            }
        }
    }

    let heroActiveTab = ref(0)

    const heroTabContents = ref([
        {
            title: 'Большое количество игр',
            description: `Выбирать игры из очень большого ассортимента. У нас их … много, от раритетных платформеров до ультрасовременных экшенов.
            
            Все продаваемые ключи закупаются у официальных дилеров, которые работают напрямую с издателями.
            `
        },
        {
            title: 'Низкие цены',
            description: `Мы делаем небольшую наценку: прибыль формируется за счет оборота, а не за счет высокой накрутки. В выигрыше остаются все!
            
            гибкая ценовая политика – у нас всегда есть скидки и акции именно на то, что вам нужно`
        },
        {
            title: 'Лицензионные ключи от официальных издателей',
            description: `Все продаваемые ключи закупаются у официальных дилеров, которые работают напрямую с издателями.
            
            Все ключи куплены легально: никаких «серых» рискованных схем. Покупайте и пользуйтесь всеми возможностями официальной версии игры.`
        }
    ])

    const heroCurrentTitle = ref()
    const heroCurrentDescr = ref()

    const categories = reactive([
        {
            name: 'Все игры',
            eng_name: ''
        },
        {
            name: 'Экшены',
            eng_name: 'action'  
        },
        {
            name: 'Приключенческие игры',
            eng_name: 'adventure'  
        },
        {
            name: 'Казуальные игры',
            eng_name: 'casual'  
        },
        {
            name: 'Инди',
            eng_name: 'indie'  
        },
        {
            name: 'Ролевые игры',
            eng_name: 'role-playing'  
        },
        {
            name: 'Симуляторы',
            eng_name: 'simulators'  
        },
        {
            name: 'Стратегии',
            eng_name: 'strategies'  
        },
        {
            name: 'Многопользовательские игры',
            eng_name: 'multiplayer'  
        },
        {
            name: 'Ранний доступ',
            eng_name: 'early_access'  
        },
        {
            name: 'Утилиты',
            eng_name: 'utilities'  
        },
        {
            name: 'Спортивные игры',
            eng_name: 'sports'  
        },
        {
            name: 'Гонки',
            eng_name: 'races'  
        },
    ])

    const getHeroCurrentTitle = computed(() => {
        heroCurrentTitle.value = heroTabContents.value[heroActiveTab.value].title
        return heroCurrentTitle
    })

    const getHeroCurrentDescr = computed(() => {
        heroCurrentDescr.value = heroTabContents.value[heroActiveTab.value].description
        return heroCurrentDescr
    })

    return {
        heroActiveTab,
        heroTabContents,
        heroCurrentTitle,
        heroCurrentDescr,
        getHeroCurrentTitle,
        getHeroCurrentDescr,
        categories,
        isFavouritesMenuOpen,
        favoritesGameList,
        addFavoriteGame,
        deleteFavoriteGame
    }
})