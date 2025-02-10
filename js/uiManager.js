import CharacterManager from './characterManager.js';
import StoryManager from './storyManager.js';

const UIManager = {
    isZoomed: false,

    updateLocation(locationName) {
        const locationImage = document.getElementById('location-image');
        locationImage.style.backgroundImage = `url('assets/images/park.png')`;
    },

    updateCharacter(characterName) {
        const character = CharacterManager.getCharacter(characterName);
        if (character) {
            const characterImage = document.getElementById('character-image');
            const characterNameElement = document.getElementById('character-name');
            const characterAffinityElement = document.getElementById('character-affinity');

            characterImage.src = character.image;
            characterNameElement.innerText = character.name;
            characterAffinityElement.innerText = `Afinidad: ${character.affinity}`;

            // Habilitamos el zoom en la imagen del personaje
            this.enableCharacterImageZoom(characterImage);
        }
    },

    enableCharacterImageZoom(characterImage) {
        characterImage.addEventListener('click', () => {
            if (!this.isZoomed) {
                characterImage.style.transform = 'scale(3)';
                characterImage.style.transition = 'transform 0.5s ease';
                this.isZoomed = true;
            } else {
                characterImage.style.transform = 'scale(1)';
                this.isZoomed = false;
            }
        });
    },

    updateAffinity(characterName) {
        const character = CharacterManager.getCharacter(characterName);
        if (character) {
            const characterAffinityElement = document.getElementById('character-affinity');
            characterAffinityElement.innerText = `Afinidad: ${character.affinity}`;
        }
    },

    showDialog(dialog, isIntroduction = false) {
        const dialogText = document.getElementById('dialog-text');
        const dialogOptions = document.getElementById('dialog-options');

        dialogText.innerText = dialog.text;
        dialogOptions.innerHTML = '';

        if (isIntroduction || (!dialog.options && dialog.type !== "playerQuestion")) {
            const continueButton = document.createElement('button');
            continueButton.innerText = "Continuar";
            continueButton.addEventListener('click', () => StoryManager.loadDialog());
            dialogOptions.appendChild(continueButton);
        } else {
            dialog.options.forEach(option => {
                const button = document.createElement('button');
                button.innerText = option.text;
                button.addEventListener('click', () => {
                    option.effect();
                    StoryManager.loadDialog();
                });
                dialogOptions.appendChild(button);
            });
        }
    },

    showPlayerQuestion(dialog, onComplete) {
        const dialogText = document.getElementById('dialog-text');
        const dialogOptions = document.getElementById('dialog-options');

        dialogText.innerText = dialog.text;
        dialogOptions.innerHTML = '';

        dialog.questions.forEach(question => {
            const button = document.createElement('button');
            button.innerText = question.text;
            button.addEventListener('click', () => {
                this.showResponseAndContinue(question, onComplete);
            });
            dialogOptions.appendChild(button);
        });
    },

    showResponseAndContinue(question, onComplete) {
        const dialogText = document.getElementById('dialog-text');
        dialogText.innerText = question.response;

        setTimeout(() => {
            question.effect();
            onComplete();  // Continuar después de mostrar la respuesta
        }, 2000);
    },

    transitionToNextCharacter(callback) {
        const characterInfo = document.getElementById('character-info');
        characterInfo.style.transition = 'opacity 2s';
        characterInfo.style.opacity = '0';
        setTimeout(() => {
            callback();
            characterInfo.style.opacity = '1';
        }, 2000);
    },

    showTemporaryMessage(message) {
        let messageBox = document.getElementById('temp-message');
        if (!messageBox) {
            messageBox = document.createElement('div');
            messageBox.id = 'temp-message';
            messageBox.style.position = 'absolute';
            messageBox.style.top = '5%';
            messageBox.style.left = '50%';
            messageBox.style.transform = 'translateX(-50%)';
            messageBox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            messageBox.style.color = 'white';
            messageBox.style.padding = '10px 20px';
            messageBox.style.borderRadius = '12px';
            messageBox.style.zIndex = '10';
            document.body.appendChild(messageBox);
        }

        messageBox.innerText = message;

        setTimeout(() => {
            messageBox.remove();
        }, 3000);
    }
};

export default UIManager;