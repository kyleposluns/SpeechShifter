from app import app
from flask import request
from app import download_srt
from app import sentencegrader


@app.route('/')
@app.route('/index')
def index():
    return "Hello World"


@app.route('/transcript', methods=["POST"])
def transcript():
    yt_link = request.form['ytlink']
    lang = request.form['lang']

    
    return download_srt.transcript(yt_link, lang)
