import { defineStore } from "pinia";
import { ref, computed, reactive } from 'vue'

export const useHomeStore = defineStore('home', () => {
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
        getHeroCurrentDescr
        // cuurentTabContent
    }
})