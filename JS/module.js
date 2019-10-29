var app = new Vue({
  el: "#vue-app",
  data: {
    selectedPage: "Home",
    juegos: [],
    equipos: [],
    selectedTeam: {},
    selectedGames: {},
    user: null
  },
  //creates the instance
  created() {
    this.getInfo();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.querySelector("#login").style.display = "none";
        document.querySelector("#logout").style.display = "";
        document.querySelector("#send").style.display = "";
        document.querySelector("#mensajes").style.display = "";
        app.getMessages();
      } else {
        document.querySelector("#login").style.display = "";
        document.querySelector("#logout").style.display = "none";
        document.querySelector("#send").style.display = "none";
        document.querySelector("#mensajes").style.display = "none";
      }
    });
  },

  methods: {
    // everything below is firebase

    login: function() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          app.getMessages();
          app.sendMessage();
        })
        .catch(err => alert(err));
    },

    sendMessage: function() {
      let message = document.querySelector("#text").value;
      let name = firebase.auth().currentUser.displayName;

      let objectToSend = {
        message,
        name
      };

      firebase
        .database()
        .ref("newChat")
        .push(objectToSend);

      document.querySelector("#text").value = "";
    },

    getMessages: function() {
      firebase
        .database()
        .ref("newChat")
        .on("value", app.printThem);
    },

    printThem: function(data) {
      let parent = document.querySelector("#mensajes");
      parent.innerHTML = "";
      for (const key in data.val()) {
        const element = data.val()[key];
        parent.insertAdjacentHTML(
          "beforeend",
          `<div style="border:2px solid black; margin: 5px; background-color:white; border-radius: 10px 140px 30px 140px;; padding:15px">
          <p style="font-size:12px; color: red">${element.name}: ${
            element.message
          }</p>
        </div>`
        );
        parent.scrollTop = parent.scrollHeight;
      }
    },

    signOut: function() {
      firebase
        .auth()
        .signOut()
        .then(
          function() {
            alert("You are logged out");
          },
          function(error) {}
        );
    },

    // logout: function() {
    //     var provider100 = old firebase.auth().signOut()},

    // everything above is for firebase

    getTeamPlayers: function(teamName) {
      var players = [];
      for (var i = 0; i < this.equipos.length; i++) {
        if (this.equipos[i].Team1 === teamName) {
          console.log(this.equipos.Team1);
          players = this.equipos[i].TeamMembers;
        }
      }
      console.log(players);
      return players;
    },
    changeTeam: function(team300) {
      this.selectedTeam = team300;
    },
    changeGame: function(game300) {
      this.selectedGames = game300;
    },
    getInfo: function() {
      fetch("https://api.myjson.com/bins/h5jhz", {
        method: "GET"
      })
        .then(function(response) {
          console.log(response);
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.statusText);
        })
        .then(function(json) {
          console.log(json);
          app.juegos = json.matches;
          app.equipos = json.allTeams;
        })
        .catch(function(error) {
          console.log("Request failed:" + error.message);
        });
    }
  },
  //input functions in computed to avoid multiple steps with the dom
  computed: {}
});
