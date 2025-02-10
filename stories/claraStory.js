const claraStory = {
    characters: ["Clara"],
    dialogSequence: {
        Clara: [
            { text: "¡Hola! Soy Clara, tu vecina. Nos cruzamos mucho, ¿verdad?", isIntroduction: true },
            {
                text: "Siempre me entero de cosas interesantes sobre el barrio.",
                options: [
                    { text: "Suena divertido.", effect: () => StoryManager.handleOptionEffect("Clara", 5) },
                    { text: "Prefiero no enterarme de esas cosas.", effect: () => StoryManager.handleOptionEffect("Clara", -5) }
                ]
            },
            { text: "Me gusta ayudar a los demás cuando puedo." },
            {
                type: "playerQuestion",
                text: "Hazle una pregunta a Clara.",
                questions: [
                    {
                        text: "¿Conoces algún buen lugar para salir por aquí?",
                        response: "Sí, hay una cafetería con música en vivo muy agradable.",
                        effect: () => StoryManager.handleOptionEffect("Clara", 10)
                    },
                    {
                        text: "¿Sueles organizar reuniones con los vecinos?",
                        response: "Sí, me encanta organizar cosas divertidas.",
                        effect: () => StoryManager.handleOptionEffect("Clara", 10)
                    }
                ]
            },
            { text: "Fue un placer hablar contigo. ¡Nos vemos en el barrio!", isFarewell: true }
        ]
    }
};

export default claraStory;