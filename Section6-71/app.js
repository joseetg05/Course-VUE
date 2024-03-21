const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'chino',
                    name: 'Chino Emilio',
                    phone: '8460 1472',
                    email: 'chino@gmail.com'
                },
                {
                    id: 'Chihuate',
                    name: 'Chihuate Sebastián',
                    phone: '8589 7129',
                    email: 'chihuate@mail.com'
                },
            ],
        };
    },
});

app.component('friend-contact', {
    template: `
    <li>
        <h2> {{ friend.name }}</h2>
        <button @click="toggleDetails()"> 
          {{ detailsAreVisible ? 'Hide' : 'Show'}} Details 
        </button>
        <ul v-if="detailsAreVisible">
          <li><strong>Phone:</strong> {{ friend.phone }}</li>
          <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
      </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'chino',
                name: 'Chino Emilio',
                phone: '8460 1472',
                email: 'chino@gmail.com'
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount('#app');