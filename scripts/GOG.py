from requests_html import AsyncHTMLSession
import json
session = AsyncHTMLSession()

results = {}

async def get_gog():
  r = await session.get('https://www.gog.com/games?page=1&sort=popularity&tab=new')
  await r.html.arender()
  Increment = 0
  grid = r.html.find('[ng-show="viewSwitcher.activeView != \'list\'"]', first=False)
  # print(title)
  for game in grid:
    Increment += 1
    output = {}
    blockitem = game.find('.product-tile', first=False)
    title = blockitem[0].find('.product-tile__title')
    price = blockitem[0].find('.product-tile__price-discounted')
    img = blockitem[0].find('.product-tile__cover-img')
    output["Title"] = title[0].text
    #print(title[0].text)
    output["Price"] = price[0].text
    #print(price[0].text)
    output["Image"] = img[0].attrs['lazy-src']
    results["Result" + str(Increment)] = output
    #print(img[0].attrs['lazy-src'])

session.run(get_gog)
print(results)