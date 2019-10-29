Vue.component("navbar", {
  template: `<div class="positionNav">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

                <ul class="navbar-nav positionLinks">
                    <li class="nav-item nav-link" v-on:click="$emit('moment')">
                        HOME
                    </li>
                    <li class="nav-item nav-link" v-on:click="$emit('moment')">
                        SHEDULE
                    </li>
                    <li class="nav-item nav-link" v-on:click="actual='table'">
                        TABLE
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">TEAMS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CHAT</a>
                    </li>
                </ul>
            </nav>
        </div> `
});

Vue.component("home", {
  template: ` 
<div>
<div class="titleHome">
            <h1>NYSL</h1>
        </div>
        <div class="logo">
            <img src="img/nysl_logo.png">
        </div>
        <div class="upcomingGames">
            <h2>Upcoming Games:</h2>
            <a href="#">Team 1 VS Team 2</a>
            <a href="#">Team 3 VS Team 4</a>
            <a href="#">Team 5 VS Team 6</a>
        </div>
        </div>

    `
});

Vue.component("shedule", {
  template: `<div>
    <div class="jornadas">
        <div>
            <button type="button" class="btn btn-success btn-lg">Jornada 1</button>
            <p>11/05/2019</p>
        </div>
        <div>
            <button type="button" class="btn btn-success btn-lg">Jornada 2</button>
            <p>18/05/2019</p>
        </div>
        <div>
            <button type="button" class="btn btn-success btn-lg">Jornada 3</button>
            <p>25/05/2019</p>
        </div>
        <div>
            <button type="button" class="btn btn-success btn-lg">Jornada 4</button>
            <p>01/06/2019</p>
        </div>
        <div>
            <button type="button" class="btn btn-success btn-lg">Jornada 5</button>
            <p>08/06/2019</p>
        </div>
        <div>
            <button type="button" class="btn btn-success btn-lg">Jornada 6</button>
            <p>15/06/2019</p>
        </div>
        <div>
            <button type="button" class="btn btn-success btn-lg">Jornada 7</button>
            <p>22/06/2019</p>
        </div>
        <div>
            <button type="button" class="btn btn-success btn-lg">Jornada 8</button>
            <p>29/06/2019</p>
        </div>
        <div>
            <button type="button" class="btn btn-success btn-lg">Jornada 9</button>
            <p>06/07/2019</p>
        </div>
        <div>
            <button type="button" class="btn btn-success btn-lg">Jornada 10</button>
            <p>13/07/2019</p>
        </div>
    </div>
    
    </div>`
});

var app = new Vue({
  el: "#vue-app",
  data: {
    actual: "home"
  },
  methods: {
    hola() {
      this.actual = "shedule";
    }
  }
});
