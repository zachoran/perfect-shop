const krogerItemList = []
const targetItemList = []
const foodCityItemList = []  // there will be 4 lists
const costcoItemList = []

document.querySelector('#kroger-button').addEventListener('click', function () {
    const userInput = document.querySelector('#item-input-blank').value
    if (userInput !== '') {
        addItems(userInput)
        krogerItemList.push(userInput)
        console.log('hi')
        // click kroger button, type item, click add item - how to link them all together?
    }
})

document.querySelector('#target-button').addEventListener('click', function () {
    console.log('hi')
})

document.querySelector('#food-city-button').addEventListener('click', function () {
    console.log('hi')
})

document.querySelector('#costco-button').addEventListener('click', function () {
    console.log('hi')
})


document.querySelector('#add-item-button').addEventListener('click', function () {
    const userInput = document.querySelector('#item-input-blank').value
    if (userInput !== '') {
        addItems(userInput)
        items.push(userInput)
        console.log(items)
    }
    document.querySelector('#item-input-blank').value = ''
    renderItems()
})

const renderItems = function () {
    document.querySelector('#item-list').innerHTML = ''
    items.forEach(function (currentItem) {
        addItems(currentItem)
    })
}

const addItems = function (currentItem) {
    const listItem = document.createElement('li')
    listItem.textContent = currentItem
    listItem.classList.add('listItem')
    document.querySelector('#item-list').appendChild(listItem)
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