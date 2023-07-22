const app = Vue.createApp({
    data(){
        return{
            name: "Homo Sapiens",
            email: "simbaamir55@gmail.com",
            picture: "https://randomuser.me/portraits/men/10.jpg"
        }
    },
    created: function() {
        alert('Component created one time!')
    },
    mounted: function() {
        alert('Component mounted one time!')
    },
    updated: function () {
        // alert('local state updated')
    },
    methods: {
        async getUser(){
            // for (let i = 0; i < 3000000000; i++) { continue }
            const res = await fetch("https://randomuser.me/api") // returns resolved response object.
            const data = await res.json() //  returns resolved data.
            this.picture = data.results[0].picture.large
            this.email = data.results[0].email
            // for(let i = 0; i < 3000000000; i++ ){ continue }
        }
    }
})
app.mount('#app')

// render component only when image is recived from cdn?
