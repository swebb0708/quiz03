// select elements and create variables
var quote = document.querySelector("#quote");
var author1 = document.querySelector("#author1");
var author2 = document.querySelector("#author2");
var author3 = document.querySelector("#author3");
var respond = document.querySelector("#respond");
var form = document.querySelector("#correct");


//define functions

function getRandom(){
    fetch('http://api.techlaunch.io:88/random')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        quote.innerHTML +=
        `
        <div class= "randomIDContainer">
            <p> "${data.text}"
        </div>
        `
        author2.textContent +=
        `${data.author}`
    })
    .catch(function(error){
        console.log("There was an error!")
    })
}

function getAuthor1(){
    fetch('http://api.techlaunch.io:88/random')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
       
        author1.textContent +=
        `${data.author}
        `
    })
    .catch(function(error){
        console.log("There was an error!")
    })
}

function getAuthor3(){
    fetch('http://api.techlaunch.io:88/random')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
       
        author3.textContent +=
        `${data.author}`
    })
    .catch(function(error){
        console.log("There was an error!")
    })
}



//add event listenders and call functions

getRandom();
getAuthor1();
getAuthor3();


form.addEventListener("click", function(){
    console.log("omg")
    
});

respond.addEventListener("click", function(event){
    if(form == "click"){
        alert("You Won!");
    }else{
        alert("Wrong choice, correct answer was " + author2.textContent);
    }

})