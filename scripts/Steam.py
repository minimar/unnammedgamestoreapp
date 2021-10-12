from requests_html import AsyncHTMLSession
session = AsyncHTMLSession()

async def get_steam():
    r = await session.get('https://store.steampowered.com/explore/new/')
    await r.html.arender()

    new_releases = r.html.find('div.tab_content#tab_newreleases_content')
    new_releases_list = new_releases[0].find('a.tab_item')

    # all_new_releases = r.html.find('#tab_allnewreleases_content')
    # all_new_releases_list = all_new_releases[0].find('.tab_item')

    # all_releases = new_releases_list + all_new_releases_list

    for game in new_releases_list:
        title = game.find('.tab_item_name')
        print(title[0].text)

        try:
            price = game.find('.discount_final_price')
            print(price[0].text)
        except IndexError:
            print("Coming Soon")

        image = game.find('.tab_item_cap_img')
        print(image[0].attrs['src'])

        tags = game.find('.tab_item_top_tags')
        print(tags[0].text)

session.run(get_steam)
