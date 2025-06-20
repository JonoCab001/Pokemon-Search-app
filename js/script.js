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

        const { name, id, weight, height, types, stats, sprites } = data;
        
        pokemonName.innerHTML = name.toUpperCase();
        pokemonId.innerHTML = id;
        pokemonWeight.innerHTML = `Weight: ${weight}`;
        pokemonHeight.innerHTML = `Height: ${height}`;
        
        pokemonImage.innerHTML = `<img id="sprite" src="${sprites.front_default}">`;

        pokemonTypes.innerHTML = types.map(type => `<span>${type.type.name.toUpperCase()}</span>`).join(" ");

        hp.innerHTML = stats[0].base_stat;
        attack.innerHTML = stats[1].base_stat;
        defense.innerHTML = stats[2].base_stat;
        specialAttack.innerHTML = stats[3].base_stat;
        specialDefense.innerHTML = stats[4].base_stat;
        speed.innerHTML = stats[5].base_stat;
        
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