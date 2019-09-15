#!/usr/bin/env python3

import json

import regex
from youtube_transcript_api import YouTubeTranscriptApi
from app import sentencegrader


def video_id(link):
    return regex.search('((?<=(v|V)/)|(?<=be/)|(?<=(\?|\&)v=)|(?<=embed/))([\w-]+)', link).group()


def transcript(link, lang="en"):
    
    # output = json(YouTubeTranscriptApi.get_transcript(video_id(link), languages=[lang]))
    # for item in output:
    a = YouTubeTranscriptApi.get_transcript(video_id(link), languages=[lang])
    for item in a:
        item.update(
            {
                "rate" : sentencegrader.flesch_reading_ease(item["text"]) / 100
            }
        )
    print(a)
    return json.dumps(a)
