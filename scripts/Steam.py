from requests_html import AsyncHTMLSession
import json
session = AsyncHTMLSession()

results = {}

async def get_steam():
    r = await session.get('https://store.steampowered.com/explore/new/')
    await r.html.arender()
    Increment = 0

    new_releases = r.html.find('div.tab_content#tab_newreleases_content')
    new_releases_list = new_releases[0].find('a.tab_item')

    for game in new_releases_list:
        Increment += 1
        output = {}
        title = game.find('.tab_item_name')
        output["Title"] = title[0].text

        try:
            price = game.find('.discount_final_price')
            output["Price"] = price[0].text
        except IndexError:
            output["Price"] = "Coming Soon"

        image = game.find('.tab_item_cap_img')
        output["Image"] = image[0].attrs['src']

        tags = game.find('.tab_item_top_tags')
        output["Tags"] = [tags[0].text]
        results["Result" + str(Increment)] = output

session.run(get_steam)
print(results)