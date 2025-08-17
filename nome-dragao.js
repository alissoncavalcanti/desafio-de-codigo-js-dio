// Lê a força do dragão e converte para inteiro
const forca = 30;

// Lê o elemento do dragão
const elemento = "Fogo";

// Definição dos prefixos baseados no elemento 
const prefixos = {
    "Fogo": ["Pyro", "Drak"],
    "Gelo": ["Frost", "Glacius"],
    "Raio": ["Volt", "Storm"],
    "Terra": ["Geo", "Titan"]
};

// TODO: Determine o prefixo e sufixo:
let prefixo = "nada";
let sufixo = "nada";

if (forca < 50) {
    prefixo = prefixos[elemento][0]
    sufixo = "thor"
}
else {prefixo = prefixos[elemento][1]
    sufixo = "zar"
}

console.log(prefixo+sufixo)
