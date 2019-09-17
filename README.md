# HackMIT Project
## Inspiration

**“If you talk to a man in a language he understands, that goes to his head. If you talk to him in his own language, that goes to his heart.” — Nelson Mandela**

Language has the power to unify people across cultures. This year at HackMIT, our team, passionate about education and the power of technology to increase educational equity, decided to tackle language learning. We understand that interacting with media such as movies and videos brought a conversational and fun method to education, but we also knew the hopeless feelings felt when a student cannot keep up with the speech. Our hack is, therefore, a smart solution to help students learn at their own pace and comfort. 

Our project tackles education, social good, and connectivity while using cloud and machine learning-based tools to achieve our goals.

## What It Does

SpeechShifter is a Chrome Extension that automatically adjusts the speed of videos depending on the language difficulty of each sentence in the video. With this Chrome Extension, English-As-A-Second-Language students are able to watch everyday/popular English videos at a pace comfortable to them without feeling overwhelmed or hopeless due to the speed and complexity of said content.

Steps: 
1. The Chrome Extension retrieves the URL of the Youtube video. 
2. This URL is sent to a web server which downloads the video and converts it into an audio file. 
3. This audio file is then stored in the Google Cloud Platform and is converted to text.
4. The text is then plugged into a readability-score function which returns the difficulty of each sentence.
5. Using this difficulty score, the video is slowed down when the language gets “difficult”.

## How We Built It

1. The front-end Chrome Extension is written in JavaScript. This retrieves the URL of the YouTube video
2. This URL is then sent to a web server written in Flask. This web server is a wrapper of the command line tool YouTubeDL, a downloader that also converts video files to audio files. 
3. This audio file is then stored in a Google Cloud Platform based ‘bucket.’ Using the Google Cloud Platform’s Cloud Video Intelligence and Speech-to-Text APIs, the audio file is converted to a punctuated text. 
4. The text is sent to the readability-score function which was created using an open-source Natural Language Processing Python library called Spacy. Utilizing linguistics research centered around phrase/sentence difficulty, the model was created.
5. Then the text file is run through the model to assess the “difficulty” of each sentence.

## Challenges We Ran Into

 There were multiple roadblocks through the journey of SpeechShifter
1. None of our team members worked with Chrome Extensions before, so we had to learn that from scratch.
2. Initially, the web server for downloading and converting video files and the code to query the Google Cloud Platform APIs was written in JavaScript. However, we had trouble integrating that with the rest of our Flask backend which made us decide to scrap the JS script. In the end, we used Flask for everything other than for the front-end of the Chrome Extension.
3. There were multiple bugs when creating the initial web server which downloaded the videos 

## Accomplishments That We’re Proud Of

1. Creating a tool that has the potential to positively impact the educational and social wellbeing of people around the world.
2. Completing features in tools we haven’t used before.
3. Being alive at 5 am. 

## What We Learned

1. Basic JS scripting.
2. Creating a Chrome Extension.
3. Natural Language Processing analysis

## What's next for SpeechShifter

1. Support for multiple languages 
2. Live machine translation for captions to follow along with native and foreign language 
3. Smooth transitions between phrases/sentences if they are at differing speeds

Thank you to HackMIT staff, mentors, and sports for the amazing event!

### Contributers: 
- Matt Tu
- Naren (Ganesh) Kolli
- Dominik Ritzenhoff
- Kyle Posluns

### Special Thanks To:
- James Packard
