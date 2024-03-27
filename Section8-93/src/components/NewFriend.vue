<template>
    <form @submit.prevent="submitData">
        <div>
            <label> Name </label>
            <input type="text" v-model="enteredName" />
        </div>
        <div>
            <label> Phone Number </label>
            <input type="tel" v-model="enteredPhone" />
        </div>
        <div>
            <label> Mail Address </label>
            <input type="email" v-model="enteredMail"/>
        </div>
        <div>
            <button> Add Contact </button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data(){
        return{
            enteredName: '',
            enteredPhone: '',
            enteredMail: ''
        }
    },
    methods:{
        submitData(){
            this.$emit(
            'add-contact',
            this.enteredName,
            this.enteredPhone,
            this.enteredMail
            );
        }
    }
};
</script>