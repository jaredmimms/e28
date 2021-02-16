const Game = {
    data() {
        return {
            playerName: '',
            mysteryNumber: 4, // ← NEW
            guess: null, // ← NEW
            guesses: [], // ← NEW
        }
    }
}
const app = Vue.createApp(Game).mount('#app');