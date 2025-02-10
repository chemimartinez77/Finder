const camilaStory = {
    characters: ["Camila"],
    dialogSequence: {
        Camila: [
            { text: "Hola, soy Camila. ¿Disfrutas de la buena comida?", isIntroduction: true },
            {
                text: "Viajar me inspira a crear nuevas recetas.",
                options: [
                    { text: "¡Suena delicioso!", effect: () => StoryManager.handleOptionEffect("Camila", 10) },
                    { text: "No soy muy aventurero con la comida.", effect: () => StoryManager.handleOptionEffect("Camila", -5) }
                ]
            },
            { text: "Siempre estoy buscando nuevos sabores." },
            {
                type: "playerQuestion",
                text: "Hazle una pregunta a Camila.",
                questions: [
                    {
                        text: "¿Cuál es tu especialidad?",
                        response: "Me especializo en cocina internacional.",
                        effect: () => StoryManager.handleOptionEffect("Camila", 15)
                    },
                    {
                        text: "¿Qué plato recomendarías para una cena romántica?",
                        response: "Algo elegante, como risotto o un buen filete.",
                        effect: () => StoryManager.handleOptionEffect("Camila", 10)
                    }
                ]
            },
            { text: "Espero verte en el restaurante algún día. ¡Adiós!", isFarewell: true }
        ]
    }
};

export default camilaStory;