function mudaBgColor(pilotos, i, element){
    switch(pilotos.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name){
        case 'Red Bull':
            element.style.backgroundColor = "#025db3";
            element.style.borderColor = "#025db3";
            break;

        case 'Ferrari':
            element.style.backgroundColor = "#dd1111";
            element.style.backgroundColor = "#dd1111";
            break;

        case 'McLaren':
            element.style.backgroundColor = "#ff7b00";
            element.style.borderColor = "#ff7b00";
            break;

        case 'Mercedes':
            element.style.backgroundColor = "#08d2be";
            element.style.borderColor = "#08d2be";
            break;

        case 'Aston Martin':
            element.style.backgroundColor = "#007b6e";
            element.style.borderColor = "#007b6e";
            break;

        case 'RB F1 Team':
            element.style.backgroundColor = "#012a6d";
            element.style.borderColor = "#012a6d";
            break;

        case 'Alpine F1 Team':
            element.style.backgroundColor = "#da68e6";
            element.style.borderColor = "#da68e6";
            break;

        case 'Sauber':
            element.style.backgroundColor = "#68e670";
            element.style.borderColor = "#68e670";
            break;

        case 'Williams':
            element.style.backgroundColor = "#949794";
            element.style.borderColor = "#949794";
            break;

        case 'Haas F1 Team':
            element.style.backgroundColor = "#474747";
            element.style.borderColor = "#474747";
            break;

        default:
            element.style.backgroundColor = "red";
            element.style.borderColor = "red";
            break;
    }
}

function insertStandings(){
    fetch("http://ergast.com/api/f1/2024/driverStandings.json")
        .then((response) => response.json())
        .then((pilotos) => {
            var standings = pilotos.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            var container = document.querySelector("#pilots-container");
            var cards = document.querySelector("#cards");

            for (var i = 0; i < 3; i++){

                var card = document.createElement("div");
                card.classList.add("card");

                var elements = document.createElement("div");
                elements.classList.add("cardElements");

                var picture = document.createElement("img");
                picture.classList.add("picture");                
                picture.src = ".\\img\\Pilots\\" + standings[i].Driver.givenName + "_" + standings[i].Driver.familyName + ".png";
                
                var texts = document.createElement("div");
                texts.classList.add("cardTexts");              

                mudaBgColor(pilotos, i, texts);

                var pilotName = document.createElement("h3");
                pilotName.classList.add("firstName");
                pilotName.textContent = standings[i].Driver.givenName;

                var pilotLastName = document.createElement("h3");
                pilotLastName.classList.add("lastName");
                pilotLastName.textContent = standings[i].Driver.familyName.toUpperCase();

                var position = document.createElement("h3");
                position.textContent = "Position: " + standings[i].position;

                pilotName.appendChild(pilotLastName);
                texts.appendChild(pilotName);

                elements.appendChild(picture);
                elements.appendChild(texts);

                card.appendChild(elements);

                cards.appendChild(card)

                container.appendChild(cards);
            }
    })
}

function insertStandingsList(){
    fetch("http://ergast.com/api/f1/2024/driverStandings.json")
        .then((response) => response.json())
        .then((pilotos) => {
            var standings = pilotos.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            var list = document.querySelector("#pList");
            console.log(standings);

            for(var i = 0; i < 10; i++){
                var listElement = document.createElement("li");

                var position = document.createElement("h3")
                position.classList.add("position");
                position.textContent = standings[i].position;

                var liFN = document.createElement("h3");
                liFN.classList.add("firstName");
                liFN.textContent = standings[i].Driver.givenName;

                var liLN = document.createElement("h3");
                liLN.classList.add("lastName");
                liLN.textContent = standings[i].Driver.familyName;
                
                var team = document.createElement("h3");
                team.textContent = standings[i].Constructors[0].name;
                team.classList.add("team");

                var points = document.createElement("h3");
                points.textContent = standings[i].points + " PTS";
                points.classList.add("points");

                listElement.appendChild(position);
                listElement.appendChild(liFN);
                listElement.appendChild(liLN);
                listElement.appendChild(team);
                listElement.appendChild(points);
                
                list.appendChild(listElement);
            }
        })};

insertStandings();
insertStandingsList();