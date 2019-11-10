import bs4
import requests

google = requests.get("https://www.google.com/")

google_bs4 = bs4.BeautifulSoup(google.text, "lxml")
print(google)#response is 200
print("****************************************************************")
print(google_bs4)#Doctype is this

from selenium import webdriver

chromedriver = "/Users/jimmygam/Downloads/chromedriver"#path of webdriver.exe
driver = webdriver.Chrome(chromedriver)

driver.get("https://www.skyscanner.jp/?previousCultureSource=GEO_LOCATION&redirectedFrom=www.skyscanner.net&locale=en-US")

city_input = driver.find_element_by_xpath("//*[@id=\"fsc-destination-search\"]")
city_input.send_keys("vietnam")