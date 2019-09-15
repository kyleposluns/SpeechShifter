var subArray;
var diffFactor = 1;
var href = window.location.href;
var href2;
var lang = 'en';

fetch(`http://localhost:5000/transcript`,
{

    method: 'POST',
    body: 'ytlink=' + decodeURIComponent(href) + '&lang=' + decodeURIComponent(lang),
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }

}).then(response => { 

    return response.json(); 

}).then(subArray => {

    var arrayLength = subArray.length;

    subArray.forEach(element => {
        element["rate"] = Math.random() * 2 + 0.5;
        console.log(element);
    }); //give bogus values for now. delete when rates are already calculated.
    
    var video = document.getElementsByTagName("video")[0];
    video.ontimeupdate = () => {
        for (let i = 0; i < arrayLength; i++) {
            const section = subArray[i];
            href2 = window.location.href;
            if (href2 != href) {
                location.reload(true); 
                //fixes problem where clicking Youtube video doesn't reset JS script
            }
            if (video.currentTime > section.start && video.currentTime < (section.start + section.duration)) {
                video.playbackRate = section.rate * diffFactor;
                return;
            }
            video.playbackRate = 1 * diffFactor;
        }
    }

    window.addEventListener("keydown", checkKeyPressed, false);
    function checkKeyPressed(evt) {
        if (evt.keyCode == "81") {
            if (diffFactor > 0.5) {
                diffFactor = diffFactor - 0.05;
                alert("difficulty set to " + diffFactor.toFixed(2));
            }
        }
        if (evt.keyCode == "80") {
            if (diffFactor < 2) {
                diffFactor = diffFactor + 0.05;
                alert("difficulty set to " + diffFactor.toFixed(2));
            }
        }
    }
});