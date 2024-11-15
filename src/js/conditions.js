import { getAlerts, getParkData, getVisitorCenterData } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { alertTemplate, visitorCenterTemplate, activitiesTemplate } from "./templates.mjs";

function setAlerts(alert) {
    const alertList = document.querySelector(".alert_list");
    alertList.innerHTML = "";
    const html = alert.map(alertTemplate);
    alertList.insertAdjacentHTML("afterbegin", html.join(""));
}

function setVisitorCenters(info) {
    const visitorList = document.querySelector(".visitor_list");
    const html = info.map(visitorCenterTemplate);
    visitorList.innerHTML = html.join("");
}

function setActivities(activity) {
    const activitiesList = document.querySelector(".activities_list");
    const html = activitiesTemplate(activity);
    activitiesList.insertAdjacentHTML("afterbegin", html);
}

async function init() {
    const parkData = await getParkData();
    const alerts = await getAlerts(parkData.parkCode);
    const visitorCenters = await getVisitorCenterData(parkData.parkCode);
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(visitorCenters);
    setActivities(parkData.activities);
}

init();