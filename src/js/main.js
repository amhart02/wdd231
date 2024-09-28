import { getParkData } from "./parkService.mjs";
import { getInfoLinks } from "./parkService.mjs";

const parkData = getParkData();
const infoLinks = getInfoLinks();

function parkInfoTemplate(info) {
    return `<a href="/" class="hero_banner_title">${info.name}</a>
    <p class="hero_banner_subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`; 
}

function mediaTemplateCard(info) {
    return `<div class="media-card">
    <img src="${info.image}"/>
    <h1>${info.name}</h1>
    <h2>${info.description}</h2>
    </div>
    `;
}

function setHeaderinfo(data) {
    const disclaimer = document.querySelector(".disclaimer a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    document.querySelector("title").innerHTML = parkData.fullName;
    document.querySelector(".hero_banner_content").innerHTML = parkInfoTemplate(parkData);
    document.querySelector(".hero_banner img").src = parkData.images[0].url;
}

function setIntroSection(data) {
    const intro = document.querySelector(".intro");
    intro.innerHTML = `<h1>${parkData.fullName}</h1>
    <p>${parkData.description}</p>`;
}

function setMediaCard(info) {
    const infoSection = document.querySelector(".info");
    const mediaCard = info.map(mediaTemplateCard);
    infoSection.innerHTML = mediaCard.join("");
}

setHeaderinfo(parkData);
setIntroSection(parkData);
setMediaCard(infoLinks);