<template>
    <form @submit.prevent="submitData">
        <div>
            <label> UserName </label>
            <input type="text" v-model="enteredUserName">
        </div>
        <div>
            <label> Age </label>
            <input type="text" v-model="enteredAge">
        </div>
        <div>
            <button> Add User</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-user'],
    data() {
        return{
            enteredUserName: '',
            enteredAge: '',
        }
    },
    methods:{
        submitData(){
            this.$emit(
            'add-user',
            this.enteredUserName,
            this.enteredAge
            );
        }
    }
}

</script>