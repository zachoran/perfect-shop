const krogerItemList = []
const targetItemList = []
const foodCityItemList = []
const costcoItemList = []
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
            krogerItemList.push(userInput)
        } else if (selectedStoreButton === 'Target') {
            targetItemList.push(userInput)
        } else if (selectedStoreButton === 'Food City') {
            foodCityItemList.push(userInput)
        } else if (selectedStoreButton === 'Costco') {
            costcoItemList.push(userInput)
        }

    }
    document.querySelector('#item-input-blank').value = ''
    renderItems()
})

const renderItems = function () {
    document.querySelector('#kroger-item-list').innerHTML = ''
    krogerItemList.forEach(function (currentItem) {
        addItems(currentItem, '#kroger-item-list')
    })
    document.querySelector('#target-item-list').innerHTML = ''
    targetItemList.forEach(function (currentItem) {
        addItems(currentItem, '#target-item-list')
    })
    document.querySelector('#food-city-item-list').innerHTML = ''
    foodCityItemList.forEach(function (currentItem) {
        addItems(currentItem, '#food-city-item-list')
    })
    document.querySelector('#costco-item-list').innerHTML = ''
    costcoItemList.forEach(function (currentItem) {
        addItems(currentItem, '#costco-item-list')
    })
}

const addItems = function (currentItem, store) {
    const listItem = document.createElement('li')
    listItem.textContent = currentItem
    listItem.classList.add('listItem')
    document.querySelector(store).appendChild(listItem)
    makeCheckbox(listItem)
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
}