import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
    return `<a href="/" class="hero_banner_title">${info.name}</a>
    <p class="hero_banner_subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`; 
}

document.querySelector("title").innerHTML = parkData.fullName;
document.querySelector(".hero_banner_content").innerHTML = parkInfoTemplate(parkData);
document.querySelector(".hero_banner img").src = parkData.images[0].url;