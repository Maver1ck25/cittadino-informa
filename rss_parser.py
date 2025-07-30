import feedparser
import json
import datetime

FEEDS = {
    "INPS_news": "https://www.inps.it/it/rss/news",
    "GU_serie_generale": "https://www.gazzettaufficiale.it/rss/serie-generale"
}

def fetch_feed(url):
    d = feedparser.parse(url)
    items = []
    for entry in d.entries:
        items.append({
            "title": entry.title,
            "link": entry.link,
            "date": entry.get("published", entry.get("updated", "")),
            "summary": entry.get("summary", ""),
            "source": url
        })
    return items

if __name__ == "__main__":
    all_items = []
    for name, url in FEEDS.items():
        all_items.extend(fetch_feed(url))

    # Ordina per data
    sorted_items = sorted(all_items, key=lambda x: x["date"], reverse=True)

    # Scrivi su JSON
    with open("notizie.json", "w") as f:
        json.dump({
            "articles": sorted_items,
            "last_updated": datetime.datetime.utcnow().isoformat()
        }, f, ensure_ascii=False, indent=2)
