import { footerTemplate, parkInfoTemplate } from "./templates.mjs";
import { enableNavigation } from "./navigation.mjs";

function setFooterInfo(data) {
    const container = document.querySelector(".contact");
    container.innerHTML = footerTemplate(data);
}

function setHeaderinfo(data) {
    const disclaimer = document.querySelector(".disclaimer a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    document.querySelector("title").innerHTML = data.fullName;
    document.querySelector(".hero_banner_content").innerHTML = parkInfoTemplate(data);
    document.querySelector(".hero_banner img").src = data.images[0].url;
}

export function setHeaderFooter(parkData) {
    setFooterInfo(parkData);
    setHeaderinfo(parkData);
    enableNavigation();
}