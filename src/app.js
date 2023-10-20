/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronoun = ["The", "Our", "we"];
  let adj = ["amazing", "bad", "good"];
  let noun = ["architect", "singer", "doctor"];
  let dominion = [".com", ".pt"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < dominion.length; d++) {
          console.log(pronoun[p], adj[a], noun[n], dominion[d]);
        }
      }
    }
  }
};


