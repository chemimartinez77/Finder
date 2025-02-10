import emmaStory from "./stories/emmaStory.js";
import marcoStory from "./stories/marcoStory.js";
import sophiaStory from "./stories/sophiaStory.js";
import laraStory from "./stories/laraStory.js";
import camilaStory from "./stories/camilaStory.js";
import isabelStory from "./stories/isabelStory.js";
import claraStory from "./stories/claraStory.js";

const StoryManager = {
    scenes: [
        {
            location: "Parque",
            description: "Un tranquilo parque con árboles altos y un lago.",
            characters: ["Emma", "Marco", "Sofia", "Lara", "Camila", "Isabel", "Clara"]
        }
    ],

    stories: {
        Emma: emmaStory,
        Marco: marcoStory,
        Sofia: sophiaStory,
        Lara: laraStory,
        Camila: camilaStory,
        Isabel: isabelStory,
        Clara: claraStory
    },

    currentCharacter: null,
    currentDialogIndex: 0,
    currentDialogSequence: null,

    initialize() {
        console.log("StoryManager iniciado.");
        this.loadInitialScene();
    },

    loadInitialScene() {
        console.log("Cargando escena inicial...");

        const initialScene = this.scenes[0];
        this.currentCharacter = initialScene.characters[0];
        console.log("Personaje actual:", this.currentCharacter);

        this.currentDialogIndex = 0;

        if (!this.stories[this.currentCharacter]) {
            console.error(`Historia no encontrada para el personaje ${this.currentCharacter}`);
            return;
        }

        this.loadCharacterStory(this.currentCharacter);
        UIManager.updateLocation(initialScene.location);
        UIManager.updateCharacter(this.currentCharacter);
        this.loadDialog();
    },

    loadCharacterStory(characterName) {
        const story = this.stories[characterName];
        if (story) {
            this.currentDialogSequence = story.dialogSequence;
            console.log(`Historia cargada para ${characterName}`);
        } else {
            console.error(`No se encontró una historia para ${characterName}`);
            UIManager.showTemporaryMessage(`No se pudo cargar la historia de ${characterName}.`);
        }
    },

    loadDialog() {
        if (!this.currentDialogSequence || !this.currentDialogSequence[this.currentCharacter]) {
            console.error("Secuencia de diálogo no encontrada para:", this.currentCharacter);
            UIManager.showTemporaryMessage("No hay diálogo disponible para este personaje.");
            this.moveToNextCharacter(this.scenes[0]);
            return;
        }

        const dialogs = this.currentDialogSequence[this.currentCharacter];
        const currentDialog = dialogs[this.currentDialogIndex];

        if (!currentDialog) {
            this.moveToNextCharacter(this.scenes[0]);
            return;
        }

        if (currentDialog.isIntroduction) {
            UIManager.showDialog(currentDialog, true);
            this.currentDialogIndex++;
            return;
        }

        if (currentDialog.isFarewell) {
            this.moveToNextCharacter(this.scenes[0]);
            return;
        }

        if (currentDialog.type === "playerQuestion") {
            UIManager.showPlayerQuestion(currentDialog, () => {
                this.currentDialogIndex++;
                this.loadDialog();
            });
        } else {
            UIManager.showDialog(currentDialog);
            this.currentDialogIndex++;
        }
    },

    handleOptionEffect(characterName, affinityChange) {
        this.increaseAffinity(characterName, affinityChange);
    },

    increaseAffinity(characterName, points) {
        const character = CharacterManager.getCharacter(characterName);
        if (character) {
            character.affinity += points;
            UIManager.updateAffinity(characterName);
            UIManager.showTemporaryMessage(`${character.name} ha aumentado su afinidad en ${points} puntos.`);
        }
    },

    moveToNextCharacter(scene) {
        const currentIndex = scene.characters.indexOf(this.currentCharacter);
        if (currentIndex < scene.characters.length - 1) {
            this.currentCharacter = scene.characters[currentIndex + 1];
            this.currentDialogIndex = 0;
            console.log("Pasando al siguiente personaje:", this.currentCharacter);
            this.loadCharacterStory(this.currentCharacter);
            UIManager.transitionToNextCharacter(() => {
                UIManager.updateCharacter(this.currentCharacter);
                this.loadDialog();
            });
        } else {
            UIManager.showTemporaryMessage("No hay más personajes en esta localización.");
        }
    }
};

export default StoryManager;