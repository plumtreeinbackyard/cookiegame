<template>
  <div class="main">
    <h1>Cookie Game</h1>
    <p>Score: {{ scoresum }}</p>
    <button @click="addScore()">Cookie button</button>
  </div>
</template>
<script>
import axios from "axios";

const GET_SCORE_API_URL = `${window.location.protocol}//${window.location.host}/score`;
const UPDATE_SCORE_API_URL = `${window.location.protocol}//${window.location.host}/updatescore`;

export default {
  name: "Home",
  data: () => ({    
    scoresum: 0
  }),
  methods: {
    addScore(){
      var score = 1;
      axios
        .post(UPDATE_SCORE_API_URL, { score })
        .then(response => {
          console.log("Score added.");
          this.scoresum = response.data[0].score;
        })
        .catch(error => {
          this.error = `Something went wrong! ${error}`;
        });

        // Get the latest score from database.
        this.showScore();
    },
    showScore(){
      axios
        .get(GET_SCORE_API_URL)
        .then(response => {    
          // The first time returned data is empty, so assign 0 to scoresum.
          // Otherwise assign score from database to scoresum.
          this.scoresum = response.data.length == 0 ? 0 : response.data[0].score;          
        })
        .catch(error => {
          this.error = `Something went wrong! ${error}`;
        });
    }
  },
  mounted() {
    // Refresh the score from database every 5 seconds.
    setInterval(function() {
        this.showScore();
        console.log("Score refreshed.");
    }.bind(this), 5000);  
  },
  created() {  
    this.showScore();    
  }
};
</script>
