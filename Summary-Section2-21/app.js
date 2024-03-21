const app = Vue.createApp({
    data() {
        return {
            name: 'Jose Emanuel Torres',
            age: 19,
            ageplus5: 19 + 5,
            favNumber:    Math.random(),
            imgM: 'https://as1.ftcdn.net/v2/jpg/00/48/94/74/1000_F_48947427_wHjQzJJcppE0JtZbmBKzCl8gQ0D9cVSO.jpg',
            names: [],
            inputText: '' 
        }
    }, 
    methods: {
        addName() {
            this.names.push(this.inputText);
        }
    }
})
app.mount('#assignment')