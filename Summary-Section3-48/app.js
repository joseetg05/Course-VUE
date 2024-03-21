const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            newTaskValue: '',
            toggleState: true,
            buttonMessage: 'Hide List'
        };
    },
    methods: {
        addTask(){
            this.tasks.push(this.newTaskValue);
            console.log(this.tasks)
        },
        ToggleButton(){
            this.toggleState = !this.toggleState;
            if(this.toggleState === true){
                this.buttonMessage = 'Hide List';
            } else[
                this.buttonMessage = 'Show List'
            ]
        }
    }
});

app.mount('#assignment')

