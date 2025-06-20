// User Input forms
const userInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Pokemon Data
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonImage = document.getElementById("pokemon-image");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

// To get Pokemon Data
const searchPokedex = async () => {
    try {
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${userInput.value.toLowerCase()}`);
        const data = await res.json();

        const { name, weight, height, id, stats, sprites, types } = data;
        
        pokemonName.innerHTML = name.toUpperCase();
        pokemonId.innerHTML = id;
        pokemonWeight.innerHTML = `Weight: ${weight}`;
        pokemonHeight.innerHTML = `Height: ${height}`;
        
        pokemonImage.innerHTML = `<img src="${sprites.front_default}">`;

        pokemonTypes.innerHTML = types.map(type => `<span>${type.type.name.toUpperCase()}</span>`).join(" ");

        console.log(data);
    }
    
    catch(err) {
        alert("Pokemon wasn't found :(");
        console.log(err.message);
    }
}

searchButton.addEventListener('click', searchPokedex);
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchPokedex();
    }
})