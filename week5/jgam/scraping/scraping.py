# This file enables scraping in foreground.
import requests
#import urllib.request
import time
from bs4 import BeautifulSoup

url = 'https://www.skyscanner.jp/?previousCultureSource=GEO_LOCATION&redirectedFrom=www.skyscanner.net&locale=en-US'
response = requests.get(url)

print(response)

soup = BeautifulSoup(response.text, "html.parser")

print(soup)