"""Run kleinanzeigen-scraper on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'searches': ['fahrrad'], 'maxItemsPerSearch': 100, 'maxItems': 200}
run = client.actor("kamerozkan/kleinanzeigen-scraper").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
