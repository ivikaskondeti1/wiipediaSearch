let spinner = document.getElementById('spinner');
let searchInput = document.getElementById('searchInput');
let searchResults = document.getElementById('searchResults');

function resultfunction(objects) {
    //console.log(objects);

    let {
        title,
        link,
        description
    } = objects;

    let resultDivEl = document.createElement("div");
    resultDivEl.classList.add("result-item");
    searchResults.appendChild(resultDivEl)
    let resultTitleEl = document.createElement("a")
    resultTitleEl.classList.add("result-title");
    resultTitleEl.textContent = title;
    resultDivEl.appendChild(resultTitleEl);
    let brEl = document.createElement("br");
    resultDivEl.appendChild(brEl);

    let resultlinkEl = document.createElement("a")
    resultlinkEl.classList.add("result-url");
    resultlinkEl.textContent = link;
    resultDivEl.appendChild(resultlinkEl);
    let brE2 = document.createElement("br");
    resultDivEl.appendChild(brE2);
    let resultdescEl = document.createElement("p")
    resultdescEl.classList.add("link-description");
    resultdescEl.textContent = description;
    resultDivEl.appendChild(resultdescEl);
    console.log(searchResults)
}

function getmethodFunction(searchQuery) {
    //console.log(searchQuery)
    searchResults.textContent = "";
    spinner.classList.toggle("d-none");
    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchQuery;
    fetch(url, options)
        .then(function(responce) {
            return responce.json();
        })
        .then(function(jsonData) {
            //console.log(jsonData);
            let {
                search_results
            } = jsonData
            //console.log(search_results[1])
            spinner.classList.toggle("d-none");
            for (let arr of search_results) {
                resultfunction(arr);
            }
        })

}

function eventTriggerFunction(value) {
    if (value.key == 'Enter') {
        let searchQuery = searchInput.value;

        getmethodFunction(searchQuery)
        //console.log(searchQuery)
    }
}
searchInput.addEventListener("keydown", eventTriggerFunction)
