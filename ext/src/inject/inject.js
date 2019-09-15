var subArray;
var href = window.location.href;
var lang = 'en';

//encodes URI
// var fullURL = "localhost:5000/transcript/?ytlink=" + encodeURI(href) + "&lang=" + encodeURI(lang);


//gets JSON file
// $.getJSON(fullURL, (data)=>{
//     subArray = data;
// });
var formBody = new FormData();
formBody.set("ytlink",encodeURIComponent(href));
formBody.set("lang",lang);

fetch(`http://localhost:5000/transcript`,
{
    method: 'POST',
    body: 'ytlink=youtube.com%2Fwatch%3Fv%3Dr_It_X7v-1E&lang=en',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
}).then(function(response) { 
    // console.log(response.stringify());
    return response.json() }
    //bogus values for rate. comment out when object file contains actual rates
).then(subArray => {
    console.log(subArray);
    var video = document.getElementsByTagName("video")[0];
    var arrayLength = subArray.length;

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