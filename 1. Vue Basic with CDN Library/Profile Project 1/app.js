const myRootComponentWithOptionData = {
    // data, function react to events, component template.
    // template:'<h2>I am {{name}} template.</h2>',
    data(){
        return {
            name: "Amir",
            country: "Nepal",
            title: "Gosaikunda",
            altitude: 4484,
            greet: "Greet",
            log: false,
            showIdentity: false,
            identityClick: "Show Identity",
            x:0,
            y:0,
            people: ['Amir','John','Chang','Obabu'],
            youtubeUrl: "https://www.youtube.com",
            imgSrc1: './assets/1.jpg',
            imgSrc2: './assets/2.jpg',
            imgSrc3: './assets/3.jpg',
            posts: [{id:1,title:'post_1',fav:true},{id:2,title:'post_2'},{id:3,title:'post_3',fav:true}]
        }
    },
    methods:{
        changeCountry(){
            this.country = 'Mero Desh'
        },
        changeGreet(val){
            this.greet = val
        },
        changeLog(){
            this.log = !this.log
        },
        setIdentity(){
            this.showIdentity = !this.showIdentity
            console.log(this.showIdentity)
            this.identityClick = this.showIdentity?"Hide Identity":"Show Identity"

        },
        handlerMouseEvents(e){
            console.log(e.type)
        },
        handlerMouseEventsArg(e,data){
            console.log(e.type,data)
        },
        handlerMouseMovement(e){
            console.log(e.type)
            this.x = e.offsetX
            this.y = e.offsetY
        },
        changeFav(post){
            post.fav = !post.fav
        }
    },
    computed:{
        filteredPosts(){
            return this.posts.filter(post=>post.fav)
        }
    }
}

const vueApp = Vue.createApp(myRootComponentWithOptionData) // creating vue app instance.
vueApp.mount('#app') // mount means to apply data(veuApp) to componentTemplate. An application instance won't render anything until its .mount() method is called. It expects a "container" argument, which can either be an actual DOM element or a selector string

// Vue.createApp(myRootComponentWithOptionData).mount('#app') and <script> export default { name: 'ComponentOne', mounted(){}}</script> are different.
// it mounts component(data+template+methods) to root element and lifecycle:it mounts data to the component templates.


