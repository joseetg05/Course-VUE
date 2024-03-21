const app = Vue.createApp({
    data() {
        return {
        counter: 0,
        //state: '',
    }
    },
    methods: {
        add(num) {
            this.counter = this.counter +  num;
            console.log(this.counter);
        },
    },
    computed: {
        state() {
            if (this.counter === '') {
                return '';
            } else {
                if (this.counter < 37) {
                    this.status = 'Not there yet!';
                    return this.status;
                } else {
                    if (this.counter > 37.1) {
                        return 'Too much!!';
                    } else {
                        if (this.counter === 37) {
                            return 'Nice, you got it!'
                        }
                    }
                }
            }
        }
    },
    watch: {
        counter(value) {
            if(value != 0){
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                    console.log("entro")
                }, 5000)
            }
        }
    }
});

app.mount('#assignment')