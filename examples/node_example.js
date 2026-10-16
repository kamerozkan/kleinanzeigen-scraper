// Run kleinanzeigen-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "searches": [
    "fahrrad"
  ],
  "maxItemsPerSearch": 100,
  "maxItems": 200
};
const run = await client.actor('kamerozkan/kleinanzeigen-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
