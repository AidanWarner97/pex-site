const samsungDevices = ["beyond0lte", "beyond1lte", "beyond2lte", "beyondx", "d1", "d2s", "d2x"];
const oneplusDevices = ["lemonade", "lemonadep"];
const xiaomiDevices = ["raphael", "alioth", "violet", "munch", "perseus"];

// Make an HTTP request to fetch the data for each device
samsungDevices.forEach(deviceCode => {
    const url = `https://raw.githubusercontent.com/PixelExtended/OTA/trece/builds/${deviceCode}.json`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Create a new div element
        const samsungDevices = document.getElementById("samsung-devices")
        const div = document.createElement("div");
        div.classList.add("device-card");
        // Add the data from the JSON object to the div element
        div.innerHTML = 
            `<a href="${data.url}">
            <div class="device-name">${data.device_name}</div>
            <div class="device-code">${data.device} - ${data.pexv}</div>
            <div class="device-username">${data.tg_username}</div>
            </a>`;
        // Append the div element to the samsung devices container
        samsungDevices.appendChild(div);
    });
});

// Make an HTTP request to fetch the data for each device
oneplusDevices.forEach(deviceCode => {
    const url = `https://raw.githubusercontent.com/PixelExtended/OTA/trece/builds/${deviceCode}.json`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Create a new div element
        const oneplusDevices = document.getElementById("oneplus-devices")
        const div = document.createElement("div");
        div.classList.add("device-card");
        // Add the data from the JSON object to the div element
        div.innerHTML = 
            `<a href="${data.url}">
            <div class="device-name">${data.device_name}</div>
            <div class="device-code">${data.device} - ${data.pexv}</div>
            <div class="device-username">${data.tg_username}</div>
            </a>`;
        // Append the div element to the oneplus devices container
        oneplusDevices.appendChild(div);
    });
});

// Make an HTTP request to fetch the data for each device
xiaomiDevices.forEach(deviceCode => {
    const url = `https://raw.githubusercontent.com/PixelExtended/OTA/trece/builds/${deviceCode}.json`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Create a new div element
        const xiaomiDevices = document.getElementById("xiaomi-devices")
        const div = document.createElement("div");
        div.classList.add("device-card");
        // Add the data from the JSON object to the div element
        div.innerHTML = 
            `<a href="${data.url}">
            <div class="device-name">${data.device_name}</div>
            <div class="device-code">${data.device} - ${data.pexv}</div>
            <div class="device-username">${data.tg_username}</div>
            </a>`;
        // Append the div element to the xiaomi devices container
        xiaomiDevices.appendChild(div);
    });
});

function showSamsung() {
    document.getElementById("samsung-devices").classList.remove("none");
    document.getElementById("xiaomi-devices").classList.add("none");
    document.getElementById("oneplus-devices").classList.add("none");
};
function showXiaomi() {
    document.getElementById("samsung-devices").classList.add("none");
    document.getElementById("xiaomi-devices").classList.remove("none");
    document.getElementById("oneplus-devices").classList.add("none");
};
function showOnePlus() {
    document.getElementById("samsung-devices").classList.add("none");
    document.getElementById("xiaomi-devices").classList.add("none");
    document.getElementById("oneplus-devices").classList.remove("none");
};