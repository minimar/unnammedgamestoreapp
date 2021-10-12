from requests_html import AsyncHTMLSession
session = AsyncHTMLSession()

async def get_itch():
    r = await session.get('https://itch.io')
    await r.html.arender()

    featuredGames = r.html.find('div.game_cell:not(.index_jam_cell_widget)')

    for game in featuredGames:
        title = game.find('a.title')
        price = game.find('div.meta_tag')
        img = game.find('a.game_thumb')

        tags = game.find('div.cell_tags > a')
        tagsText = map(lambda x: x.text[1:], tags)
        tagsString = ' '.join(list(tagsText))

        print(title[0].text)
        print(price[0].text)
        print(img[0].attrs['data-background_image'])
        print(tagsString)

session.run(get_itch)