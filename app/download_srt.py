#!/usr/bin/env python3

import json

import regex
from youtube_transcript_api import YouTubeTranscriptApi


def video_id(link):
    return regex.search('((?<=(v|V)/)|(?<=be/)|(?<=(\?|\&)v=)|(?<=embed/))([\w-]+)', link).group()


def transcript(link, lang="en"):
    return json.dumps(YouTubeTranscriptApi.get_transcript(video_id(link), languages=[lang]))

