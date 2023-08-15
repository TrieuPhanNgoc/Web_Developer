function search() {
    var query = document.getElementById("search-box").value;
    
    // Make an Ajax request to the Google search API
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.googleapis.com/customsearch/v1?q=" + query + "&key=YOUR_API_KEY");
    xhr.onload = function() {
    if (xhr.status == 200) {
    var results = JSON.parse(xhr.responseText);
    
    // Display the results
    document.querySelector(".results-container").innerHTML = results.items.map(function(item) {
    return "<li><a href='" + item.link + "'>" + item.title + "</a></li>";
    }).join("");
    }
    };
    xhr.send();
    }
    
    document.getElementById("search-button").onclick = function() {
    search();
    };
    