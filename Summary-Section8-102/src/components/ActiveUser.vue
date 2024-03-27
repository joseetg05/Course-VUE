<template>
    <li>
        <h2> <strong>Username: </strong> {{ username }} </h2>
        <h3> <strong>Age: </strong> {{ age }} </h3>
    </li>
</template>

<script>
    export default {
        props: {
            id:{
                tyoe: String,
                required: true
            },
            username: {
                type: String,
                required: true
            },
            age:{
                type: String,
                required: true
            }
        }, 
        emits: [],
        data() {

        },
        methods: {

        }

    }
</script>