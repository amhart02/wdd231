const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  const apiKey = "d4fS3fmqE8iMZ104u8FuLIltUB9ib6ZvxzPVgTpY";
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}

function listTemplate(item) {
  return `<li><a href="${item.url}">${item.fullName}</a>${item.states}</li>`;
}

async function renderClimbingList() {
  const endpoint = "activities/parks?q=climbing";
  const listElement = document.getElementById("outputList");
  console.log(listElement);
  const data = await getJson(endpoint);
  console.log(data);
  const parks = data.data[0].parks;
  console.log(parks);
  const listHtml = parks.map(listTemplate);
  console.log(listHtml);
  listElement.innerHTML = listHtml.join("");
}

renderClimbingList();

