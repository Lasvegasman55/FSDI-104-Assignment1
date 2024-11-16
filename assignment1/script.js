// Create an array of pets using object literals
const pets = [
    { name: 'Bella', age: 3, gender: 'Female', service: 'Grooming', breed: 'Golden Retriever' },
    { name: 'Max', age: 5, gender: 'Male', service: 'Vaccination', breed: 'Labrador' },
    { name: 'Luna', age: 2, gender: 'Female', service: 'Checkup', breed: 'Beagle' }
];

// Function to display the total number of pets
function displayPetCount() {
    const petCount = pets.length;
    document.getElementById('pet-count').innerText = petCount;
}

// Function to display the names of pets
function displayPetNames() {
    const petList = document.getElementById('pet-list');
    petList.innerHTML = ''; // Clear existing list

    for (let i = 0; i < pets.length; i++) {
        const petItem = document.createElement('li');
        petItem.innerText = pets[i].name;
        petList.appendChild(petItem);
    }
}

// Initialize the display functions
displayPetCount();
displayPetNames();
