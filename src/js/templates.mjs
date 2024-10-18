import spritePath from "../images/sprite.symbol.svg";

export function parkInfoTemplate(info) {
    return `<a href="/" class="hero_banner_title">${info.name}</a>
    <p class="hero_banner_subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`; 
}

export function mediaTemplateCard(info) {
    return `<div class="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name} class="media-card-img"/>
    <h1>${info.name}</h1>
    </a>
    <h2>${info.description}</h2>
    </div>
    `;
}

export function alertTemplate(alert) {
    let alertType = "";
    switch (alert.category) {
        case "Park Closure":
            alertType = "closure";
            break;
        default:
            alertType = alert.category.toLowerCase();
    }
    return `<li class="alert">
        <svg class="icon icon_alert" focusable="false" aria-hidden="true">
            <use href="${spritePath}#alert-${alertType}"></use>
        </svg>
        <div class="alert_info">
        <h3 class="alert-${alertType}">${alert.title}</h3>
        <p>${alert.description}</p>
        </div>
        </li>
    `;
}

export function visitorCenterTemplate(info) {
    return `<li class="visitor-center">
    <h3>${info.name}</h3>
    <p>${info.description}</p>
    <p>${info.directionsInfo}</p>
    </li>`;
}

export function activitiesTemplate(activities) {
    return activities.map((activity) => `<li>${activity.name}</li>`).join("");
}

export function footerTemplate(info) {
    const voice = getPhoneNumber(info.contacts.phoneNumbers);

    return `
    <h1>CONTACT INFO</h1>
    <h2>Phone:</h2>
    <p>${voice}</p>
    `;
}

function getPhoneNumber(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}
