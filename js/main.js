function insertStandings(){
    fetch("http://ergast.com/api/f1/2024/driverStandings.json")
        .then((response) => response.json())
        .then((pilotos) => {
            var standings = pilotos.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            var container = document.querySelector("#pilots-container");

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

                var pilot = document.createElement("h3");
                pilot.textContent = standings[i].Driver.givenName + " " + standings[i].Driver.familyName.toUpperCase();

                var position = document.createElement("h3");
                position.textContent = "Position: " + standings[i].position;

                
                texts.appendChild(pilot);
                texts.appendChild(position);

                elements.appendChild(picture);
                elements.appendChild(texts);

                card.appendChild(elements);

                container.appendChild(card);
            }
    })
}


insertStandings();