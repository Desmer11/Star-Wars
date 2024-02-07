// --------------------------------------------------------------------------------
let apiPeople = "https://swapi.dev/api/people/"
let pagePeople = 1

let buttonPeople = document.getElementById("buttonPeople")
let buttonPeopleNext = document.getElementById("buttonPeopleNext")
let buttonPeoplePrevious = document.getElementById("buttonPeoplePrevious")
let pagesButtonsPeople = document.getElementById("pagesButtonsPeople")


function fetchPeople() {
  fetch(apiPeople + `?page=${pagePeople}`)
  .then(function(response) {
    console.log(response)
    return response.json()
  })
  .then(function(data) {
    console.log("Request Succesfull", data)
    functionPeople(data.results)
    pageNumberPeople(data.count)
  })
  .catch(function(response) {
    console.log("The Request has Failed")
  })
}

function functionPeople(array) {
    const table = document.getElementById("tablePeople");
    table.innerHTML = "";
    const headers = ["Name", "Height (cm)", "Mass (kg)", "Gender", "Birth Year", "Appearances"];
    //1
    //2
    const trHeader = document.createElement("tr");
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.innerText = headerText;
        trHeader.appendChild(th);
    });
    table.appendChild(trHeader);
    //3
    array.forEach(element => {
        const tr = document.createElement("tr");
        const rowData = [
            element.name,
            element.height,
            element.mass,
            element.gender,
            element.birth_year,
            element.films.length
        ];
        rowData.forEach(cellData => {
            const td = document.createElement("td");
            td.innerText = cellData;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}

function pageNumberPeople(data) {
  
    let page = document.getElementById("peoplePage")
    let count = Math.ceil(data / 10);
    page.innerText = `Page: ${pagePeople} / ${count}`
  
    for(i = 1; i <= count; i++) {
      const btn = document.createElement("button")
      btn.innerText = i;
      pagesButtonsPeople.appendChild(btn)
      
      btn.addEventListener("click", function() {
        pagePeople = btn.innerText
        fetchPeople()
      })
    }
}


  buttonPeople.addEventListener("click", function() {
    pagePeople = 1
    fetchPeople()

  })

  buttonPeopleNext.addEventListener("click", function() {
    pagePeople++;
    fetchPeople()
    
  })

  buttonPeoplePrevious.addEventListener("click", function() {
    pagePeople--
    fetchPeople()
   
  })

//   -------------------------------------------------------------------------------------


let apiShips = "https://swapi.dev/api/starships/"
let pageShips = 1

let buttonShips = document.getElementById("buttonShips")
let buttonShipsNext = document.getElementById("buttonShipsNext")
let buttonShipsPrevious = document.getElementById("buttonShipsPrevious")




function fetchShips() {
  fetch(apiShips + `?page=${pageShips}`)
  .then(function(response) {
    console.log(response)
    return response.json()
  })
  .then(function(data) {
    console.log("Request Succesfull", data)
    functionShips(data.results)
  })
  .catch(function(response) {
    console.log("The Request has Failed")
  })
}
  
function functionShips(array) {

    let table = document.getElementById("tableSpaceships")
    table.innerHTML = "";

    let thName = document.createElement("th")
    let thModel = document.createElement("th")
    let thManufacturer = document.createElement("th")
    let thCredits = document.createElement("th")
    let thCrewCapacity = document.createElement("th")
    let thClass = document.createElement("th")

    thName.innerText = "Name"
    thModel.innerText = "Model"
    thManufacturer.innerText = "Manufacturer"
    thCredits.innerText = "Credits"
    thCrewCapacity.innerText = "Crew Capacity"
    thClass.innerText = "Class"

    let trHeader = document.createElement("tr")

    trHeader.appendChild(thName)
    trHeader.appendChild(thModel)
    trHeader.appendChild(thManufacturer)
    trHeader.appendChild(thCredits)
    trHeader.appendChild(thCrewCapacity)
    trHeader.appendChild(thClass)

    table.appendChild(trHeader)
    
    array.forEach(element => {
        let tr = document.createElement("tr")
        let tdName = document.createElement("td")
        let tdModel = document.createElement("td")
        let tdManufacturer = document.createElement("td")
        let tdCredits = document.createElement("td")
        let tdCrewCapacity = document.createElement("td")
        let tdClass = document.createElement("td")
    
        let TotalPassengers = parseInt(element.crew) + parseInt(element.passengers)

        tdName.innerText = element.name
        tdModel.innerText = element.model
        tdManufacturer.innerText = element.manufacturer
        tdCredits.innerText = element.cost_in_credits
        tdCrewCapacity.innerText = TotalPassengers
        tdClass.innerText = element.starship_class

        tr.appendChild(tdName)
        tr.appendChild(tdModel)
        tr.appendChild(tdManufacturer)
        tr.appendChild(tdCredits)
        tr.appendChild(tdCrewCapacity)
        tr.appendChild(tdClass)

        tr.style.color = "black"
        tr.style.fontSize = "18px"

        table.appendChild(tr)
    });
}

buttonShips.addEventListener("click", function() {
  fetchShips()
  let page = document.getElementById("shipPage")
  page.innerText = `Page: ${pageShips}/4`
})

buttonShipsNext.addEventListener("click", function() {
  pageShips++;
    fetchShips()
    let page = document.getElementById("shipPage")
    page.innerText = `Page: ${pageShips}/4`
})

buttonShipsPrevious.addEventListener("click", function() {
  pageShips--
  fetchShips()
  let page = document.getElementById("shipPage")
  page.innerText = `Page: ${pageShips}/4`
})


// ----------------------------------------------------------------









