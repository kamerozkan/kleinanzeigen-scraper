#!/usr/bin/env bash
# Run kleinanzeigen-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~kleinanzeigen-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"searches": ["fahrrad"], "maxItemsPerSearch": 100, "maxItems": 200}'
