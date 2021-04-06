import { createApp } from 'vue'
import SuccessError from './components/SuccessError.vue'

const WordScramble = {
    data() {
        return {
            playerName: '',
            loaded: false,
            words: [
                ['apple', 'Sometimes red, sometimes delicious'],
                ['washington', 'Rushmore’s left edge'],
                ['pumpkin', 'Halloween’s favorite fruit'],
                ['football', 'Play with your hands or feet, depending on your location']
            ],
            selectedWord: [],
            selectedWordIndex: '',
            guess: '',
            classApply: ''
        }
    },
    computed: {
        scrambled() {
            let wordArray = this.selectedWord[0][0].split("");
            let word = '';
            function recursion() {
                let randomNumber = Math.floor(Math.random() * Math.floor(wordArray.length));
                word += wordArray[randomNumber];
                wordArray.splice(randomNumber, 1);
                if (wordArray.length > 0) {
                    recursion();
                }
            }
            recursion();
            return word;
        }
    },
    methods: {
        addName() {
            this.loaded = true;
            let randomNumber = Math.floor(Math.random() * Math.floor(this.words.length));
            this.selectedWord = [this.words[randomNumber]];
            this.selectedWordIndex = randomNumber;
        },
        takeGuess() {
            if (this.guess == this.selectedWord[0][0]) {
                this.classApply = "correct";
            }
            else {
                this.classApply = "incorrect";
            }
        },
        playAgain() {
            this.classApply = '';
            this.guess = '';
            let copyData = [];
            this.words.forEach(function (item) {
                copyData.push(item);
            });
            copyData.splice(this.selectedWordIndex, 1);
            let randomNumber = Math.floor(Math.random() * Math.floor(copyData.length));
            this.selectedWord = [copyData[randomNumber]];
            let select = this.selectedWord;
            let indexed;
            this.words.forEach(function (item, index) {
                if (item[0] == select[0][0]) {
                    indexed = index;
                }
            });
            this.selectedWordIndex = indexed;
        }
    }
};

const app = createApp(WordScramble);

app.component('success-error', SuccessError);

app.mount('#app');