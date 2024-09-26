import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
    return `<a href="/" class="hero_banner_title">${info.name}</a>
    <p class="hero_banner_subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`; 
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



setHeaderinfo(parkData);
setIntroSection(parkData);