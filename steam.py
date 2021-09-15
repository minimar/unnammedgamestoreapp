from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

my_url = 'https://store.steampowered.com/explore/new/'

uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

page_soup = soup(page_html, 'html.parser')
container = page_soup.findAll('a', {'class':'tab_item'})
try:
    count = 0
    for item in container:
        price = container[count].find('div','tab_item_discount')
        title = container[count].find('div','tab_item_content')
        cover = container[count].find('div', 'tab_item_cap')
        tags = title.find('div', 'tab_item_top_tags')
        print("price: " + price['data-price-final'])
        print("Title: " + title.div.text)
        print("Cover: " + cover.img['src'])
        print("Tags: " + tags.text)
        count += 1
except KeyError:
    print("Key error found, assuming end of results.")
else:
    print("Unknown error.")