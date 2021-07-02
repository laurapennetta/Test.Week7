// JavaScript source code
function save() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    let value = document.getElementById("storageValue").value;
    try {
        storage.setItem(key, value);
        /*alert(key + " " + value + " " + "ora anche tu sei una creatura marina!");*/
    } catch (e) {
        alert("Impossibile salvare i dati richiesti");
    }
}
function getStorage() {
    let storageName = "localStorage";
    try {
        return (storageName in window && window[storageName] != null) ? window[storageName] : null;
    } catch (e) {
        return null;
    }
}