async function fetchPokemon() {
    const input = document.getElementById("pokemonInput").value.trim().toLowerCase();
    const errorMessage = document.getElementById("errorMessage");
    const pokemonCard = document.getElementById("pokemonCard");

    if (!input) return;

    errorMessage.classList.add("hidden");
    pokemonCard.classList.add("hidden");

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        if (!response.ok) throw new Error("Pokémon no encontrado");

        const data = await response.json();

        document.getElementById("pokemonImage").src = data.sprites.front_default;
        document.getElementById("pokemonName").textContent = data.name;
        document.getElementById("pokemonAbilities").textContent = data.abilities.map(a => a.ability.name).join(", ");

        pokemonCard.classList.remove("hidden");
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove("hidden");
    }
}
