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
