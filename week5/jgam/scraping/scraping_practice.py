import bs4
import requests

google = requests.get("https://www.google.com/")

google_bs4 = bs4.BeautifulSoup(google.text, "lxml")
print(google)#response is 200
print("****************************************************************")
print(google_bs4)#Doctype is this

from selenium import webdriver

chromedriver = "/Users/jeonghan.gam/Downloads/chromedriver"#path of webdriver.exe
driver = webdriver.Chrome(chromedriver)

driver.get("https://brunch.co.kr/@jk-lab/18")