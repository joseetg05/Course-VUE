const app = Vue.createApp({
    data(){
        return {
            input1: '',
            toggleBox: true,
            input2: '',

        }
    },
    computed: {
        StyleInput1() {
            if(this.input1 === 'user1') {
                return {user1: true}
            } else if(this.input1 === 'user2') {
                return {user2: true}
            } else {
                return '';
            }
        },
        Toggle() {
            if(this.toggleBox === false){
                return {'hidden': true}
            } else if(this.toggleBox === true) {
                return {'visible': true}
            }
        },
        StyleInput2() {
            return 'background-color: ' + this.input2;
        }
    },
    methods: {
        SaveInput1(event){
            this.input1 = event.target.value
        },
        ToggleButton(){
            this.toggleBox = !this.toggleBox
        },
        SaveInput2(event){
            this.input2 = event.target.value
        }
    }
});

app.mount("#assignment")