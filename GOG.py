from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
my_url = 'https://www.gog.com/games?page=1&sort=popularity&tab=new'
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()
page_soup = soup(page_html, 'html.parser')
container = page_soup.findAll('div', {'ng-repeat':'tileData in catalog.products track by tileData.id'})
try:
    count = 0
    for item in container:
        contain = container[count].find('div','product-tile')
        #contain1 = container[count].find('div','product-tile_title')
        #contain2 = container[count].find('div', 'product-tile_cover')
        print("price: " + contain['product-tile-id'])
        #print("Title: " + contain1.text)
        #print("Cover: " + contain2.picture.img['src'])
        count += 1
except KeyError:
    print("Key error found, assuming end of results.")
else:
    print("Unknown error.")