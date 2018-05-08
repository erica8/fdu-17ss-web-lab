

const countries = [
    {
        name: "Canada",
        continent: "North America",
        cities: ["Calgary", "Montreal", "Toronto"],
        photos: ["canada1.jpg", "canada2.jpg", "canada3.jpg"]
    },
    {
        name: "United States",
        continent: "North America",
        cities: ["Boston", "Chicago", "New York", "Seattle", "Washington"],
        photos: ["us1.jpg", "us2.jpg"]
    },
    {
        name: "Italy",
        continent: "Europe",
        cities: ["Florence", "Milan", "Naples", "Rome"],
        photos: ["italy1.jpg", "italy2.jpg", "italy3.jpg", "italy4.jpg", "italy5.jpg", "italy6.jpg"]
    },
    {
        name: "Spain",
        continent: "Europe",
        cities: ["Almeria", "Barcelona", "Madrid"],
        photos: ["spain1.jpg", "spain2.jpg"]
    }
];



var  div =document.getElementById('one');
for(var i=0;i<4;i++){
    let divOne = document.createElement("div");
    divOne.className="item";

    let name = document.createElement("h2");
    name.innerHTML =countries[i].name;
    divOne.appendChild(name);
    let  continent =document.createElement("h3");
    continent.innerHTML =countries[i].continent;
    divOne.appendChild(continent);

    let inner1 = document.createElement("div");
    inner1.className="inner-box";
    let city = document.createElement("h3");
    city.innerHTML= "Cities";
    inner1.appendChild(city);
    let ul = document.createElement("ul");

    for(let j=0;j<countries[i].cities.length;j++){
        let citiesName = document.createElement("li");
        citiesName.innerHTML=countries[i].cities[j];
        ul.appendChild(citiesName);
    }
    inner1.appendChild(ul);

    let inner2 = document.createElement("div");
    inner2.className="inner-box";
    let popular = document.createElement("h3");
    popular.innerHTML= "Popular photos";
    inner2.appendChild(popular);


    for(let m=0;m<countries[i].photos.length;m++){
        let photo = document.createElement("img");
        photo.className= "photo";
        photo.src="images/"+ countries[i].photos[m];
        inner2.appendChild(photo);
    }
    let button= document.createElement("button");
    button.className ="button";
    button.innerHTML ="visit";

    divOne.appendChild(inner1);
    divOne.appendChild(inner2);
    divOne.appendChild(button);
    div.appendChild(divOne);
}



