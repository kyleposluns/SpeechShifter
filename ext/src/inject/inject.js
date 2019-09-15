var subArray;
var href = window.location.href;
var lang = 'en';

fetch(`http://localhost:5000/transcript`,
{

    method: 'POST',
    body: 'ytlink=' + decodeURIComponent(href) + '&lang=' + decodeURIComponent(lang),
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }

}).then(response=> { 

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
            if (video.currentTime > section.start && video.currentTime < (section.start + section.duration)) {
                video.playbackRate = section.rate;
                return;
            }
            video.playbackRate = 1;
        }
    }
});