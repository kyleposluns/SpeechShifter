#!/usr/bin/env python3

import json
from os import path

import regex
from youtube_transcript_api import YouTubeTranscriptApi

'''
def handle_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-y", "--youtube", help="specify a youtube video link", required=True)
    parser.add_argument("-l", "--lang", help="specify desired language", required=True)
    parser.add_argument("-o", "--output", help="specify output file", required=False, default="output.json")
    return parser.parse_args()
'''


def get_file_path(name, directory, extension):
    if not path.exists(directory + "/" + name + "." + extension):
        return directory + "/" + name + "." + extension
    else:
        i = 1
        while path.exists(str(directory + "/" + name + "_%s" + "." + extension) % i):
            i += 1
        return str(directory + "/" + name + "_%s" + "." + extension) % i


def video_id(link):
    return regex.search('((?<=(v|V)/)|(?<=be/)|(?<=(\?|\&)v=)|(?<=embed/))([\w-]+)', link).group()


def transcript(link, lang="en"):
    return json.dumps(YouTubeTranscriptApi.get_transcript(video_id(link), languages=[lang]))

