# Kleinanzeigen Scraper - Listings, Prices & New Ads Alert

Kleinanzeigen scraper and API: listings by keyword or any search URL with price, VB, location, date, shipping, seller type and photos, optional full details, plus new ads alerts and price drops since your last run. Pay per listing.

**[Run it on Apify Store](https://apify.com/kamerozkan/kleinanzeigen-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/kleinanzeigen-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/kleinanzeigen-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/kleinanzeigen-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "searches": [
    "fahrrad"
  ],
  "maxItemsPerSearch": 100,
  "maxItems": 200
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "adId": "3542130787",
    "title": "iphone 11 mit Originalverpackung",
    "url": "https://www.kleinanzeigen.de/s-anzeige/iphone-11-mit-originalverpackung/3542130787-173-3410",
    "price": 130,
    "priceText": "130 € VB",
    "negotiable": true,
    "oldPrice": null,
    "currency": "EUR",
    "postalCode": "12305",
    "city": "Tempelhof",
    "location": "12305 Tempelhof",
    "postedAt": "2026-10-16T06:15:00Z",
    "postedText": "Heute, 08:15",
    "shippingPossible": true,
    "directBuy": true,
    "isTopAd": false,
    "isProShop": false,
    "shopName": null,
    "shopUrl": null,
    "imageUrl": "https://img.kleinanzeigen.de/api/v1/prod-ads/images/0e/0e256f2e-2c21-49c2-a38c-4708d64635e9?rule=$_59.AUTO",
    "imageCount": 2,
    "descriptionSnippet": "ich verkaufe mein Iphone 11, es kommt zusammen mit seiner Originalverpackung. Das Handy ist in...",
    "search": "iphone in Berlin",
    "page": 1,
    "position": 3,
    "totalResults": 3235,
    "searchUrl": "https://www.kleinanzeigen.de/s-preis:100:800/iphone/k0l3331r20",
    "scrapedAt": "2026-10-16T06:25:37Z",
    "isNew": true,
    "previousPrice": null,
    "priceChange": null,
    "firstSeenAt": "2026-10-16T06:25:35Z"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/kleinanzeigen-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
