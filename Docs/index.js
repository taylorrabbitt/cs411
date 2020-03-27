document.addEventListener("submit", fetchData); //by listening to the submit of the form, this makes sure the form submission executes the fetchData function

function fetchData(e) {
    e.preventDefault(); //it prevents an auotmatic refresh/redirect of the page
    
    //get the values of the inputs from the submitted form
    let origin = e.target[0].value
    let destination = e.target[1].value
    let date = e.target[2].value

    document.querySelector(".results").textContent = ""; //clear the results from previous

    if (origin && destination && date) { //we make sure the user has put in data to the inputs
        //Fetch the API with the user data from the inputs:
        let url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${origin}/${destination}/${date}`; 
        //API endpoint we want to get information
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "49992a544fmsh7a5579737c31ea9p102b23jsn7d70fff2be0e"  //this is the API Key (keep it secret)  put it on the backend
            }
        }) 
            //we will use .then() to take action on the fetch response
            .then(res => {                
                if (res.ok) {
                    return res.json(); //we make sure that the response is JSON format
                } else {
                    document.querySelector(".results").textContent = "Invalid search query, please check your spelling!";
                }
                throw new Error("Network response was not ok!");
            })
            .then(data => {
                
                data.Quotes.forEach(element => {
                    var el = document.createElement('div');
                    el.textContent = element.MinPrice;
                    document.querySelector('.results').append(el)
                });
                
                let results = document.querySelector(".results");
                                console.log(results);
                //results.textContent = "";
                results.style.display = "block";
            })
           
    } else {
        console.log("invalid blank search");
        document.querySelector(".results").textContent = "Please provide all valid information."
    } 
}