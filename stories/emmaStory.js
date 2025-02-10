export default {
    characters: ["Emma"],
    dialogSequence: {
        Emma: [
            { text: "¡Hola! Soy Emma, encantada de conocerte.", isIntroduction: true },
            {
                text: "¡Qué buen día para leer en el parque, ¿no crees?",
                options: [
                    { text: "Sí, me encanta este lugar.", effect: () => StoryManager.handleOptionEffect("Emma", 10) },
                    { text: "Prefiero los sitios cerrados.", effect: () => StoryManager.handleOptionEffect("Emma", -5) }
                ]
            },
            { text: "La lectura es una forma maravillosa de explorar otros mundos." },
            {
                type: "playerQuestion",
                text: "Hazle una pregunta a Emma.",
                questions: [
                    {
                        text: "¿Te gusta la película 'Regreso al futuro'?",
                        response: "¡Sí, es una de mis favoritas! Me encanta la ciencia ficción.",
                        effect: () => StoryManager.handleOptionEffect("Emma", 15)
                    },
                    {
                        text: "¿Te gusta la película 'Leyendas de pasión'?",
                        response: "No es mi estilo, prefiero algo más alegre.",
                        effect: () => StoryManager.handleOptionEffect("Emma", -5)
                    }
                ]
            },
            { text: "Fue genial conocerte. ¡Espero verte pronto!", isFarewell: true }
        ]
    }
};