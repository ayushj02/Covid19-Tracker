// console.log('Connected To JS Server'); (For Testing Purposes)

window.onload = function(){
    getCovidStats();
    getdat();
}

// window.onload = function(){
//     getdat();
// }

function getCovidStats(){
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/147')
    .then(function (resp){
        return resp.json()
    })
    .then(function(data){
        // console.log(data); (For Testing Purposes)
        let population = data.location.country_population;
        let update = data.location.last_updated;
        let confirmedCases = data.location.latest.confirmed;
        let deaths = data.location.latest.deaths;

        document.getElementById('population').innerHTML = population.toLocaleString('en');
        // document.getElementById('update').innerHTML = update.substr(0, 5);
        document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
        document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
        document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
    })
    .catch(function(){
        console.log("error");
    })
    setTimeout(getCovidStats, 43200000) //updates every 12 hours
}

function getdat(){
    let d = new Date();
    update.innerHTML = d.toDateString().substr(4, 15);
}

