// A. All the countries from the Asia continent /region using the Filter function:
const country=new XMLHttpRequest();
country.open("GET","https://restcountries.com/v3.1/all");
country.send();

country.responseType="json";
country.onload=function dry( ){
const regions=country.response;
console.log("All the countries from the Asia continent /region:")
regions.filter((m)=>{
if(m.region=="Asia"){
    
    console.log("Name of countrys:",m.name.common,"Region:",m.region)

}
}
)
};

// B. All the countries with a population of less than 2 lakhs using Filter function:

const country1=new XMLHttpRequest();
country1.open("GET","https://restcountries.com/v3.1/all");
country1.send();

country1.responseType="json";
country1.onload=function dry( ){
const popu=country1.response;
console.log("All the countries with a population of less than 2 lakhs:")
popu.filter((n)=>{
if(n.population<2_00_000){
   
    console.log(n.name.common,n.population)

}
}
)
};
// C. The following details name, capital, flag using forEach function:
const country2=new XMLHttpRequest();
country2.open("GET","https://restcountries.com/v3.1/all");
country2.send();

country2.responseType="json";
country2.onload=function dry(){
const capitals=country2.response;
console.log("The following details name, capital, flag:")
capitals.forEach(function (j){
console.log("Name of country:",j.name.common,"Capital:",j.capital,"Flag:",j.flag)
})
};

// D. The total population of countries using reduce function:

const country3=new XMLHttpRequest();
country3.open("GET","https://restcountries.com/v3.1/all");
country3.send();

country3.responseType="json";
country3.onload=function dry( ){
const reduce_fun=country3.response;
console.log(" the total population of countries:")
reduce_fun.reduce((g,p)=>{
   g=p;
console.log("Total population",p.population)
})

};

// E. The country which uses US Dollars as currency:

const country4=new XMLHttpRequest();
country4.open("GET","https://restcountries.com/v3.1/all");
country4.send();

country4.responseType="json";
country4.onload=function dry(){
const uS=country4.response;
console.log("The country which uses US Dollars as currency:")

for(i in uS){
    var dollars=uS[i].currencies;
    for(j in dollars){


if (dollars[j].name == "United States dollar"){

    console.log("Country name:",uS[i].name.common,"US Dollars:",dollars[j].name) 
}

    }
  
}
};