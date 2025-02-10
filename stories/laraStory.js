import StoryManager from '../js/storyManager.js';

const laraStory = {
    characters: ["Lara"],
    dialogSequence: {
        Lara: [
            { text: "Hola, soy Lara. ¿Eres competitivo?", isIntroduction: true },
            {
                text: "Me encanta ganar, aunque también sé perder cuando toca.",
                options: [
                    { text: "A mí también me gusta competir.", effect: () => StoryManager.handleOptionEffect("Lara", 10) },
                    { text: "Prefiero evitar la competencia.", effect: () => StoryManager.handleOptionEffect("Lara", -5) }
                ]
            },
            { text: "El mundo del marketing es como un juego de estrategia." },
            {
                type: "playerQuestion",
                text: "Hazle una pregunta a Lara.",
                questions: [
                    {
                        text: "¿Cuál ha sido tu mayor logro profesional?",
                        response: "Lograr una campaña viral fue increíble.",
                        effect: () => StoryManager.handleOptionEffect("Lara", 15)
                    },
                    {
                        text: "¿Consideras que el trabajo es todo en la vida?",
                        response: "No, aunque me gusta mucho lo que hago.",
                        effect: () => StoryManager.handleOptionEffect("Lara", 5)
                    }
                ]
            },
            { text: "Fue interesante conocerte. ¡Hasta luego!", isFarewell: true }
        ]
    }
};

export default laraStory;