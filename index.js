import { getAllAlco, postAlco, updateAlco, deleteAlco } from "./api.js";

class Alcohol {
    constructor(brand, name, price, volume, strength, country, image) {
        this.brand = brand;
        this.country = country;
        this.name = name;
        this.price = price;
        this.volume = volume;
        this.strength = strength;
        this.image = image;
    }

    async delete() {
        await deleteAlco(this.id);
    }
}

let alcoholsData = [];

const fetchData = async () => {
    alcoholsData = await getAllAlco();
    renderAlcohols(alcoholsData);
};

fetchData();

let filteredAlcohols = alcoholsData;

function renderAlcohols(alcohols) {
    const alcoholList = document.getElementById('alcohol-list');
    alcoholList.innerHTML = '';

    alcohols.forEach((alcohol, index) => {
        const alcoholItem = document.createElement('div');
        alcoholItem.classList.add('alcohol-item');
        alcoholItem.innerHTML = `
            <img src="${alcohol.image}" alt="${alcohol.brand} ${alcohol.name}" width="200">
            <p>Бренд: ${alcohol.brand}</p>
            <p>Назва: ${alcohol.name}</p>
            <p>Ціна: ${alcohol.price}₴</p>
            <p>Об'єм: ${alcohol.volume}л.</p>
            <p>Міцність: ${alcohol.strength}%</p>
            <p>Країна: ${alcohol.country}</p>
            <button class="edit-button" data-index="${index}">Редагувати</button>
            <button class="delete-button" data-index="${index}">Видалити</button>
        `;
        alcoholList.appendChild(alcoholItem);

        const editButton = alcoholItem.querySelector('.edit-button');
        editButton.addEventListener('click', () => {
            openEditModal(alcohols[index]);
        });

        const deleteButton = alcoholItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            deleteAlcohol(alcohols[index]);
        });
    });
}
const cancelSearchButton = document.getElementById("cancel-search-button");

cancelSearchButton.addEventListener("click", () => {
    document.getElementById('search-input').value = "";
    filteredAlcohols = alcoholsData;
    renderAlcohols(filteredAlcohols);
    calculateTotalPrice();
});

document.getElementById('sort-by-price').addEventListener('click', () => {
    const sortedAlcohols = [...filteredAlcohols].sort((a, b) => a.price - b.price);
    renderAlcohols(sortedAlcohols);
});

document.getElementById('sort-by-brand').addEventListener('click', () => {
    const sortedAlcohols = [...filteredAlcohols].sort((a, b) => a.brand.localeCompare(b.brand));
    renderAlcohols(sortedAlcohols);
});

function calculateTotalPrice() {
    const totalAmount = filteredAlcohols.reduce((total, alcohol) => total + alcohol.price, 0);
    document.getElementById('total-amount').textContent = totalAmount;
}

calculateTotalPrice();

                        /////////////
                    /////////////////////
                ////////////////////////////
            ////////////////////////////////////
        ////////////////////////////////////////////
    ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
                       //**4 лабка**//
//////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
        ///////////////Можна 1.2 позязя/////////////
            ////////////////////////////////////
                ////////////////////////////
                    /////////////////////
                        /////////////

// відкриття модального вікна для додавання товару
function openCreateModal() {
    const createModal = document.getElementById("create-modal");
    createModal.style.display = "block";
}

// додати слухача події для кнопки "Додати товар"
document.getElementById("open-create-modal-button").addEventListener("click", openCreateModal);

// додавання нового товару
async function createAlcohol() {
    const brand = document.getElementById("create-brand").value;
    const name = document.getElementById("create-name").value;
    const price = parseFloat(document.getElementById("create-price").value);
    const volume = parseFloat(document.getElementById("create-volume").value);
    const strength = parseFloat(document.getElementById("create-strength").value);
    const country = document.getElementById("create-country").value;
    const image = document.getElementById("create-image").value;

    const newAlcohol = new Alcohol(brand, name, price, volume, strength, country, image);
    await postAlco(newAlcohol);
    alcoholsData.push(newAlcohol);

    closeModalCreate();

    renderAlcohols(alcoholsData);
    calculateTotalPrice();
}

// Додавання слухача події для кнопки "зберегти" в модальному вікні для додавання товару
document.getElementById("create-modal-form").addEventListener("submit", function(event) {
    event.preventDefault();
    createAlcohol();
});

//закриття модального вікна для додавання товару
function closeModalCreate() {
    const createModal = document.getElementById("create-modal");
    createModal.style.display = "none";
}

//функцію для закриття модального вікна для редагування товару
function closeModalEdit() {
    const editModal = document.getElementById("edit-modal");
    editModal.style.display = "none";
}

//додавання слухачі подій для закриття модальних вікон
document.getElementById("close-create-modal").addEventListener("click", closeModalCreate);
document.getElementById("close-edit-modal").addEventListener("click", closeModalEdit);

// відкриття модального вікна для редагування товару
function openEditModal(alcohol) {
    const editModal = document.getElementById("edit-modal");
    editModal.style.display = "block";

    // редагування
    document.getElementById("edit-brand").value = alcohol.brand;
    document.getElementById("edit-name").value = alcohol.name;
    document.getElementById("edit-price").value = alcohol.price;
    document.getElementById("edit-volume").value = alcohol.volume;
    document.getElementById("edit-strength").value = alcohol.strength;
    document.getElementById("edit-country").value = alcohol.country;
    document.getElementById("edit-image").value = alcohol.image;

    // обробник події для збереження редагованого товару
    async function saveEditedAlcohol(alcohol) {
        // оновлення редагування
        alcohol.brand = document.getElementById("edit-brand").value;
        alcohol.name = document.getElementById("edit-name").value;
        alcohol.price = parseFloat(document.getElementById("edit-price").value);
        alcohol.volume = parseFloat(document.getElementById("edit-volume").value);
        alcohol.strength = parseFloat(document.getElementById("edit-strength").value);
        alcohol.country = document.getElementById("edit-country").value;
        alcohol.image = document.getElementById("edit-image").value;
    
        await updateAlco(alcohol.id, alcohol);
    
        closeModalEdit();
    
        const updated = await getAllAlco();
        renderAlcohols(updated);
        calculateTotalPrice();
    }
    

    // обробник події для збереження редагованого то    вару
    document.getElementById("edit-modal-form").addEventListener("submit", function(event) {
        event.preventDefault(); 
        saveEditedAlcohol(alcohol);
    });
}

async function deleteAlcohol(alcohol) {
    await deleteAlco(alcohol.id); 
    alcoholsData = alcoholsData.filter(item => item !== alcohol);

    const updated = await getAllAlco();
    renderAlcohols(updated);

    calculateTotalPrice();
}
