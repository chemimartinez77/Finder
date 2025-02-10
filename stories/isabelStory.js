const isabelStory = {
    characters: ["Isabel"],
    dialogSequence: {
        Isabel: [
            { text: "Hola, soy Isabel. Enseño historia del arte.", isIntroduction: true },
            {
                text: "La conexión emocional es importante para comprender el arte.",
                options: [
                    { text: "Estoy de acuerdo, el arte es muy profundo.", effect: () => StoryManager.handleOptionEffect("Isabel", 10) },
                    { text: "Prefiero cosas más prácticas.", effect: () => StoryManager.handleOptionEffect("Isabel", -5) }
                ]
            },
            { text: "Es fascinante cómo el arte puede unir a las personas." },
            {
                type: "playerQuestion",
                text: "Hazle una pregunta a Isabel.",
                questions: [
                    {
                        text: "¿Tienes un artista favorito?",
                        response: "Amo a Van Gogh por su forma de capturar emociones.",
                        effect: () => StoryManager.handleOptionEffect("Isabel", 10)
                    },
                    {
                        text: "¿Crees que el arte es esencial para la sociedad?",
                        response: "Definitivamente, nos ayuda a entendernos mejor.",
                        effect: () => StoryManager.handleOptionEffect("Isabel", 15)
                    }
                ]
            },
            { text: "Espero que algún día podamos visitar un museo juntos.", isFarewell: true }
        ]
    }
};

export default isabelStory;