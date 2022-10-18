const rootElement = document.querySelector("#root");
const apiKey = "f50f14781afc48d0959123718221510";
let apiUrl = `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=London`;
let apiUrlWeather = `http://api.weatherapi.com/v1/current.json?key=f50f14781afc48d0959123718221510&q=London&aqi=no`;



async function foo() {
    let obj;

    const res = await fetch(apiUrl)

    obj = await res.json();

    return obj
  }

  async function makeData (){
      let data = await foo();
      console.log(data);
      rootElement.insertAdjacentHTML("beforeend", 
          <div>${data}</div>
      )
    }
















/* let data = fetch(apiUrl)
    .then(response => response.json())
    .then(responseJson => data = responseJson);


    fetch(apiUrlWeather)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));



console.log(data.then(info => info)) */