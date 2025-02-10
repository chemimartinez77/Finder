const sophiaStory = {
    characters: ["Sophia"],
    dialogSequence: {
        Sophia: [
            { text: "¡Hola! Soy Sophia, me encanta conocer gente nueva.", isIntroduction: true },
            {
                text: "¿Te gustan los videojuegos?",
                options: [
                    { text: "Sí, juego bastante.", effect: () => StoryManager.handleOptionEffect("Sophia", 10) },
                    { text: "No, prefiero otras actividades.", effect: () => StoryManager.handleOptionEffect("Sophia", -5) }
                ]
            },
            { text: "Yo soy fan de los juegos de estrategia y ciencia ficción." },
            {
                type: "playerQuestion",
                text: "Hazle una pregunta a Sophia.",
                questions: [
                    {
                        text: "¿Prefieres consolas o PC?",
                        response: "PC, claro. Las posibilidades son infinitas.",
                        effect: () => StoryManager.handleOptionEffect("Sophia", 10)
                    },
                    {
                        text: "¿Has probado juegos de simulación?",
                        response: "Sí, pero prefiero juegos más dinámicos.",
                        effect: () => StoryManager.handleOptionEffect("Sophia", 5)
                    }
                ]
            },
            { text: "Ha sido divertido hablar contigo. ¡Nos vemos!", isFarewell: true }
        ]
    }
};

export default sophiaStory;