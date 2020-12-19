let krogerItemList = []
let targetItemList = []
let foodCityItemList = []
let costcoItemList = []
let selectedStoreButton = ''

document.querySelector('#kroger-button').addEventListener('click', function () {
    selectedStoreButton = 'Kroger'
})

document.querySelector('#target-button').addEventListener('click', function () {
    selectedStoreButton = 'Target'
})

document.querySelector('#food-city-button').addEventListener('click', function () {
    selectedStoreButton = 'Food City'
})

document.querySelector('#costco-button').addEventListener('click', function () {
    selectedStoreButton = 'Costco'
})

document.querySelector('#add-item-button').addEventListener('click', function () {
    const userInput = document.querySelector('#item-input-blank').value
    if (userInput !== '') {
        if (selectedStoreButton === 'Kroger') {
            krogerItemList.push({title: userInput, completed: false})
        } else if (selectedStoreButton === 'Target') {
            targetItemList.push({title: userInput, completed: false})
        } else if (selectedStoreButton === 'Food City') {
            foodCityItemList.push({title: userInput, completed: false})
        } else if (selectedStoreButton === 'Costco') {
            costcoItemList.push({title: userInput, completed: false})
        } else {
            alert('Please select a store.')
        }
    }
    document.querySelector('#item-input-blank').value = ''
    renderItems()
})

const renderItems = function () {
    document.querySelector('#kroger-item-list').innerHTML = ''
    krogerItemList.forEach(function (currentItem) {
        renderListItem(currentItem, '#kroger-item-list')
    })
    document.querySelector('#target-item-list').innerHTML = ''
    targetItemList.forEach(function (currentItem) {
        renderListItem(currentItem, '#target-item-list')
    })
    document.querySelector('#food-city-item-list').innerHTML = ''
    foodCityItemList.forEach(function (currentItem) {
        renderListItem(currentItem, '#food-city-item-list')
    })
    document.querySelector('#costco-item-list').innerHTML = ''
    costcoItemList.forEach(function (currentItem) {
        renderListItem(currentItem, '#costco-item-list')
    })
}

const renderListItem = function (currentItem, store) {
    const listItem = document.createElement('li')
    listItem.textContent = currentItem.title
    listItem.classList.add('listItem')
    document.querySelector(store).appendChild(listItem)
    makeCheckbox(listItem)
    makeRemoveButton(listItem, 0, store)                           // why do we have a 0?
    saveItems()
}

const makeCheckbox = function (listItem) {
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList.add('checkbox')
    listItem.appendChild(checkbox)
    checkbox.addEventListener('change', function () {
        if (!checkbox) {
            checkbox
        }
    })
    saveItems()
}

const makeRemoveButton = function (listItem, itemIndex, store) {
    const removeButton = document.createElement('button')
    removeButton.innerHTML = 'Remove'
    removeButton.classList.add('remove-button')
    listItem.appendChild(removeButton)
    removeButton.addEventListener('click', function () {

        // these are the html id's

        if (store === '#kroger-item-list') {
            krogerItemList.splice(itemIndex, 1)
        } else if (store === '#target-item-list') {
            targetItemList.splice(itemIndex, 1)
        } else if (store === '#food-city-item-list') {
            foodCityItemList.splice(itemIndex, 1)
        } else {
            costcoItemList.splice(itemIndex, 1)
        }
        renderItems()
        saveItems()                   
    })
}

const loadItems = function () {
    const krogerItemListJSON = localStorage.getItem('perfect-shop-kroger-list')
    krogerItemList = JSON.parse(krogerItemListJSON) || []
    const targetItemListJSON = localStorage.getItem('perfect-shop-target-list')
    targetItemList = JSON.parse(targetItemListJSON) || []
    const foodCityItemListJSON = localStorage.getItem('perfect-shop-food-city-list')
    foodCityItemList = JSON.parse(foodCityItemListJSON) || []
    const costcoItemListJSON = localStorage.getItem('perfect-shop-costco-list')
    costcoItemList = JSON.parse(costcoItemListJSON) || []
}

const saveItems = function () {
    localStorage.setItem('perfect-shop-kroger-list', JSON.stringify(krogerItemList))
    localStorage.setItem('perfect-shop-target-list', JSON.stringify(targetItemList))
    localStorage.setItem('perfect-shop-food-city-list', JSON.stringify(foodCityItemList))
    localStorage.setItem('perfect-shop-costco-list', JSON.stringify(costcoItemList))
}

const init = function () {
    loadItems()
    renderItems()
}

init()