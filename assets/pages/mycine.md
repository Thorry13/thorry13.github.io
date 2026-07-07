## Context
In 2020, I just heard about web scraping technique in a class and wanted to apply this new skill to a personal concrete project. At the time, I needed a way to manage my personal watchlist. So, I started scraping [Allociné](www.allocine.fr) France's most popular cinematographic website, to extract relevant information, store it in a database and display it via a command-line interface (CLI). Later, I improved the system to fetch data directly from Allociné's API, as a mobile app would do.

## Description
My program collects the following data for each movie:
- Title
- Director
- Synopsis
- Duration
- Ratings

This information is stored and retrieved from a SQLite database using python scripts. I also designed a CLI with the following features:
- Display movie details
- Add a movie to the watchlist
- Remove a movie from the watchlist
- Show a summary of the watchlist

## Challenges
- API_KEY
- sniffing techniques : Burp Suite (proxy)

## Credits
Gromez: https://wiki.gromez.fr/dev/api/allocine_v3
