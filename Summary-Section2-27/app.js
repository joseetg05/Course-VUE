const app = Vue.createApp({
    data() {
        return {
            input1: '',
            input2: '',
        };
    },
    methods: {
        doAlert() {
            alert('This is an alert!');
        },
        setFirstInput(event) {
            this.input1 = event.target.value
        },
        setSecondInput(event) {
            this.input2 = event.target.value
        }
    }
});

app.mount('#assignment')