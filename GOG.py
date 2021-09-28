from requests_html import AsyncHTMLSession
session = AsyncHTMLSession()

async def get_gog():
  r = await session.get('https://www.gog.com/games?page=1&sort=popularity&tab=new')
  await r.html.arender()
  grid = r.html.find('[ng-show="viewSwitcher.activeView != \'list\'"]', first=False)
  # print(title)
  for game in grid:
    blockitem = game.find('.product-tile', first=False)
    title = blockitem[0].find('.product-tile__title')
    price = blockitem[0].find('.product-tile__price-discounted')
    img = blockitem[0].find('.product-tile__cover-img')
    print(title[0].text)
    print(price[0].text)
    print(img[0].attrs['lazy-src'])

session.run(get_gog)