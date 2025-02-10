const marcoStory = {
    characters: ["Marco"],
    dialogSequence: {
        Marco: [
            { text: "¡Hey! Soy Marco, es bueno verte por aquí.", isIntroduction: true },
            {
                text: "Siempre estoy dispuesto a escuchar si necesitas consejos.",
                options: [
                    { text: "Gracias, lo tendré en cuenta.", effect: () => StoryManager.handleOptionEffect("Marco", 5) },
                    { text: "No suelo pedir consejos.", effect: () => StoryManager.handleOptionEffect("Marco", -5) }
                ]
            },
            { text: "A veces, las decisiones más difíciles traen los mejores resultados." },
            {
                type: "playerQuestion",
                text: "Hazle una pregunta a Marco.",
                questions: [
                    {
                        text: "¿Cómo manejas el estrés?",
                        response: "Hago ejercicio, me ayuda a despejar la mente.",
                        effect: () => StoryManager.handleOptionEffect("Marco", 10)
                    },
                    {
                        text: "¿Crees que es importante tomar riesgos?",
                        response: "Sí, pero siempre calculados.",
                        effect: () => StoryManager.handleOptionEffect("Marco", 10)
                    }
                ]
            },
            { text: "Nos vemos pronto, ¡cuídate!", isFarewell: true }
        ]
    }
};

export default marcoStory;