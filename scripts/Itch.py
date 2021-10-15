from requests_html import AsyncHTMLSession
session = AsyncHTMLSession()

results = {}

async def get_itch():
    r = await session.get('https://itch.io')
    await r.html.arender()
    Increment = 0

    featuredGames = r.html.find('div.game_cell:not(.index_jam_cell_widget)')

    for game in featuredGames:
        Increment += 1
        output = {}
        title = game.find('a.title')
        price = game.find('div.meta_tag')
        img = game.find('a.game_thumb')

        tags = game.find('div.cell_tags > a')
        tagsText = map(lambda x: x.text[1:], tags)
        tagsString = ' '.join(list(tagsText))

        output["Title"] = title[0].text
        #print(title[0].text)
        output["Price"] = price[0].text
        #print(price[0].text)
        output["Image"] = img[0].attrs['data-background_image']
        #print(img[0].attrs['data-background_image'])
        output["Tags"] = tagsString
        #print(tagsString)
        results["Result" + str(Increment)] = output

session.run(get_itch)
print(results)