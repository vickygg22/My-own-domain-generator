/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our", "my"];
  let adjs = ["great", "big", "small", "amazing"];
  let nouns = ["jogger", "racoon", "runner", "walker"];
  let domains = ["com", "es", "us"];
  let name = [];
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjs.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < domains.length; l++) {
          name = `${pronouns[i]}${adjs[j]}${nouns[k]}.${domains[l]}`;
          console.log(name);
        }
      }
    }
  }
};
