/* 
https://www.fourmilab.ch/yoursky/custom.html
https://github.com/tapaswenipathak/Horoscope-API
*/

console.log("connected");

window.addEventListener("load", () => {
    const dayApi = `https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/today/Gemini`;
    const weekApi = `https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/week/Gemini`;

    fetch(dayApi)
        .then(response => {
            console.log("got fetch");
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById("horo").innerHTML = data.horoscope;
        });

    fetch(weekApi)
        .then(response => {
            console.log("got fetch");
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById("focus").innerHTML = data.horoscope;
        });
});


