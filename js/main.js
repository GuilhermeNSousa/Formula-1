function insertStandings(){
    fetch("http://ergast.com/api/f1/2024/driverStandings.json")
        .then((response) => response.json())
        .then((pilotos) => {
            var standings = pilotos.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            var container = document.querySelector("#pilots-container");
            var cards = document.querySelector("#cards");

            for (var i = 0; i < 3; i++){
                console.log(standings[i]);

                var card = document.createElement("div");
                card.classList.add("card");

                var elements = document.createElement("div");
                elements.classList.add("cardElements");

                var picture = document.createElement("img");
                picture.classList.add("picture");                
                picture.src = ".\\img\\Pilots\\" + standings[i].Driver.givenName + "_" + standings[i].Driver.familyName + ".png";
                
                var texts = document.createElement("div");
                texts.classList.add("cardTexts")

                var pilotName = document.createElement("h3");
                pilotName.classList.add("firstName")
                pilotName.textContent = standings[i].Driver.givenName;

                var pilotLastName = document.createElement("h3");
                pilotLastName.classList.add("lastName");
                pilotLastName.textContent = standings[i].Driver.familyName.toUpperCase();

                var position = document.createElement("h3");
                position.textContent = "Position: " + standings[i].position;

                pilotName.appendChild(pilotLastName)
                texts.appendChild(pilotName);

                elements.appendChild(picture);
                elements.appendChild(texts);

                card.appendChild(elements);

                cards.appendChild(card)

                container.appendChild(cards);
            }
    })
}


insertStandings();