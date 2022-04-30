const App ={
    data(){
        
    }
    
}
const app=Vue.createApp(App)

var elems = document.querySelectorAll('.sidenav');
var instances = M.Sidenav.init(elems, {});

var slopp = document.querySelectorAll('.slider');
var instances = M.Slider.init(slopp, {
    indicators: false,
    height:900,
    duration: 1488
});

var paro = document.querySelectorAll('.parallax');
var instances = M.Parallax.init(paro, {});
var cola = document.querySelectorAll('.collapsible');
var instances = M.Collapsible.init(cola, {});
app.mount('#app')