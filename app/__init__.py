from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

from app import routes
from app import download_srt
from app import sentencegrader