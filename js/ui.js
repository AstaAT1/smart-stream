const category = document.querySelector('#categoryView')
const section1 = document.querySelector('#section1')
const section2 = document.querySelector('#section2')
const documentaires = document.querySelector('#documentaires')
const films = document.querySelector('#films')
const series = document.querySelector('#series')
const sports = document.querySelector('#sports')
const actualites = document.querySelector('#actualites')
const musique = document.querySelector('#musique')
const channelsList = document.querySelector('#channelsList')

function showCategory() {
    category.classList.remove('hidden')
    category.classList.add('flex')

    section1.classList.remove('flex')
    section1.classList.add('hidden')
    section2.classList.remove('flex')
    section2.classList.add('hidden')
}

export function change(arr) {
    documentaires.addEventListener('click', function () {
        showCategory()
        const arrdata = filterByCategory(arr, 'Documentaires')
        renderChannels(arrdata)
    })

    films.addEventListener('click', function () {
        showCategory()
        const arrdata = filterByCategory(arr, 'Films')
        renderChannels(arrdata)
    })

    series.addEventListener('click', function () {
        showCategory()
        const arrdata = filterByCategory(arr, 'Séries')
        renderChannels(arrdata)
    })

    sports.addEventListener('click', function () {
        showCategory()
        const arrdata = filterByCategory(arr, 'Sports')
        renderChannels(arrdata)
    })

    musique.addEventListener('click', function () {
        showCategory()
        const arrdata = filterByCategory(arr, 'Musique')
        renderChannels(arrdata)
    })

    actualites.addEventListener('click', function () {
        showCategory()
        const arrdata = filterByCategory(arr, 'Actualités')
        renderChannels(arrdata)
    })
}
export function filterByCategory(channels, selectedCategory) {
    const filterCategory = channels.filter(function (channel) {
        return selectedCategory === channel.category
    })

    return filterCategory
}

export function renderChannels(arr) {
    console.log("renderChannels called", arr.length)
    channelsList.innerHTML = arr.map(function (channel) {
        return `
<div class=" channel-card flex items-center gap-4 bg-[#202020] border border-white/10 rounded-xl p-4 cursor-pointer hover:border-red-600 hover:bg-red-950/20 transition">

    <div class="w-14 h-14 shrink-0 bg-[#303030] rounded-lg flex items-center justify-center overflow-hidden">
        <img
            src="${channel.logo}"
            alt="${channel.name}"
            class="w-full h-full object-contain"
        >
    </div>

    <div class="flex flex-col gap-2 min-w-0">
        <span class="text-xs font-semibold text-red-500">
            CH ${channel.channelNumber}
        </span>

        <h3 class="font-semibold text-sm md:text-base truncate">
            ${channel.name}
        </h3>

        <span class="text-xs text-gray-400">
            ${channel.category}
        </span>
    </div>

    <i class="fa-solid fa-chevron-right text-gray-500 ml-auto"></i>

</div> `
    }).join("")
    function selectChannel(arr) {
    const cardChannel = document.querySelectorAll('.channel-card')
    console.log(cardChannel.length)
    console.log("Cards found:", cardChannel.length)
    cardChannel.forEach( function(e , index){
        e.addEventListener('click' , function () {
            const selectedChannel = arr[index]
            console.log(selectedChannel)
        })
    })
}
selectChannel(arr)
}


