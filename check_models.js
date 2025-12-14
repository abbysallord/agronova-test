const fs = require('fs');
const key = "AIzaSyDcRnFSkaTJ9mNnkPfHFjE5noCQZCSfmO8";
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    let output = "Available Models:\n";
    if(data.models) {
        data.models.forEach(m => {
            output += m.name + "\n";
        });
    } else {
        output += "Error: " + JSON.stringify(data, null, 2);
    }
    fs.writeFileSync('available_models.txt', output);
    console.log("Done writing to available_models.txt");
  })
  .catch(err => {
      fs.writeFileSync('available_models.txt', "Fetch Error: " + err.toString());
  });
