from app import app
from flask import request
from app.download_srt import transcript


@app.route('/')
@app.route('/index')
def index():
    return "Hello World"


@app.route('/transcript', methods=["POST"])
def transcript():
    yt_link = request.form['ytlink']
    lang = request.form['lang']

    return transcript(yt_link, lang)
