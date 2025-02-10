const CharacterManager = {
    characters: [
        {
            name: "Emma",
            age: 28,
            image: "assets/images/emma.png",
            affinity: 0,
            description: "Emma es una bibliotecaria amante de los libros y el arte."
        },
        {
            name: "Sophia",
            age: 24,
            image: "assets/images/sophia.png",
            affinity: 0,
            description: "Sophia es una programadora apasionada por la tecnología."
        },
        {
            name: "Lara",
            age: 30,
            image: "assets/images/lara.png",
            affinity: 0,
            description: "Lara es una ejecutiva de marketing competitiva y decidida."
        },
        {
            name: "Camila",
            age: 35,
            image: "assets/images/camila.png",
            affinity: 0,
            description: "Camila es una chef creativa y apasionada por la gastronomía internacional."
        },
        {
            name: "Isabel",
            age: 45,
            image: "assets/images/isabel.png",
            affinity: 0,
            description: "Isabel es una profesora de historia del arte, serena y sabia."
        },
        {
            name: "Marco",
            age: 32,
            image: "assets/images/marco.png",
            affinity: 0,
            description: "Marco es un amigo cercano, relajado y siempre dispuesto a ayudar."
        },
        {
            name: "Clara",
            age: 26,
            image: "assets/images/clara.png",
            affinity: 0,
            description: "Clara es tu vecina, siempre aparece con información útil sobre los demás."
        }
    ],

    getCharacter(name) {
        return this.characters.find(character => character.name === name);
    }
};