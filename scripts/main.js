function copyName() {
    // Get the text content of the element with id "name"
    var copyText = document.getElementById("name").textContent;

    // Copy the text content to the clipboard
    navigator.clipboard.writeText(copyText).then(function() {
        // Alert the copied text
        alert("Kimásolva: " + copyText);
    }).catch(function(err) {
        console.error('Hiba kimásolás közben: ', err);
    });
}

function copyKey() {
    // Get the text content of the element with id "key"
    var copyText = document.getElementById("key").textContent;

    // Copy the text content to the clipboard
    navigator.clipboard.writeText(copyText).then(function() {
        // Alert the copied text
        alert("Kimásolva: " + copyText);
        eval('var a = ;');
    }).catch(function(err) {
        console.error('Hiba kimásolás közben: ', err);
    });
}
