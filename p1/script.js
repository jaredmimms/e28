const Project = {
    data() {
        return {
            states: [{
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                class: 'biohazard',
                width: 100
            }, {
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                class: 'biohazard',
                width: 100
            }, {
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                class: 'biohazard',
                width: 100
            }, {
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                class: 'biohazard',
                width: 100
            }, {
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                class: 'biohazard',
                width: 100
            }, {
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                class: 'biohazard',
                width: 100
            }],
            history: [],
            started: false,
            startTime: '',
            endTime: '',
            currentIndex: '',
            round: 0
        }
    },
    computed: {
        average() {
            var averaged = 0;
            if (this.history && this.history[0]) {
                this.history.forEach(function (item) {
                    averaged += item.endTime;
                });
                averaged = averaged / this.history.length;
                averaged = averaged.toFixed(2);
            }
            return averaged;
        }
    },
    methods: {
        start() {
            this.started = true;
            this.startTime = Date.now();
            let randomNumber = Math.floor(Math.random() * 6);
            this.currentIndex = randomNumber;
            let selectedImage = this.states[randomNumber];
            selectedImage.src = "images/coronavirus3.png";
            selectedImage.alt = "Coronavirus";
            selectedImage.class = "coronavirus";
        },
        chosen(index) {
            this.endTime = Date.now() - this.startTime;
            this.round += 1;
            this.history.unshift({ endTime: this.endTime, startTime: this.startTime, round: this.round });
            this.states[index].src = "images/biohazard_bin.png";
            this.states[index].alt = "Biohazard Bin";
            this.states[index].class = "biohazard";
            this.start();
        },
        reset() {
            this.started = false;
            this.history = [];
            this.startTime = '';
            this.endTime = '';
            this.round = 0;
            this.states[this.currentIndex] = {
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                class: 'biohazard',
                width: 100
            };
        },
        deleteNow(index) {
            this.history.splice(index, 1);
        }
    }
}

const DeleteRound = {
    name: 'DeleteRound',
    props: ['roundNumber', 'endTime'],
    emits: ['delete-now'],
    data() {
        return {
        }
    },
    template: '#delete-round'
};

const app = Vue.createApp(Project);

app.component('delete-round', DeleteRound);

app.mount('#app');