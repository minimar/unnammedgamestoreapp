from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

my_url = 'https://store.steampowered.com/category/action_rogue_like/'

uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

page_soup = soup(page_html, 'html.parser')
container = page_soup.findAll('a', {'class':'tab_item'})
try:
    count = 0
    for item in container:
        contain = container[count].find('div','tab_item_discount')
        contain1 = container[count].find('div','tab_item_content')
        contain2 = container[count].find('div', 'tab_item_cap')
        contain3 = contain1.find('div', 'tab_item_top_tags')
        print("price: " + contain['data-price-final'])
        print("Title: " + contain1.div.text)
        print("Cover: " + contain2.img['src'])
        print("Tags: " + contain3.text)
        count += 1
except KeyError:
    print("Key error found, assuming end of results.")
else:
    print("Unknown error.")