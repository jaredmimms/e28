const Project = {
    data() {
        return {
            states: [{
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                width: 100
            }, {
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                width: 100
            }, {
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                width: 100
            }, {
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                width: 100
            }, {
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                width: 100
            }, {
                src: 'images/biohazard_bin.png',
                alt: 'Biohazard Bin',
                width: 100
            }],
            started: false
        }
    },
    methods: {
        start() {
            this.started = true;
        },
        chosen() {

        }
    }
}
const app = Vue.createApp(Project).mount('#app');