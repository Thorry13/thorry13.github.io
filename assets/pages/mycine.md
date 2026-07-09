<a href="https://github.com/thorry13/mycine">
  <img
    style="position: fixed; top: 0; right: 0; border: 0;"
    src="https://img.shields.io/badge/Github-Source_code-blue?logo=github"
    alt="View on GitHub">
</a>

## Context
In 2020, I just heard about web scraping technique in a class and wanted to apply this new skill to a personal concrete project. 

At the time, I needed a way to manage my personal watchlist. So, I started scraping [Allociné](www.allocine.fr) France's most popular cinematographic website, to extract relevant information, store it in a database and display it via a command-line interface (CLI). 

Later, I improved the system to fetch data directly from Allociné's API, as a mobile app would do.

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
Web scraping may be limited for fetching some information. 
Most mobile apps now require a **dedicated API** to make data requests.
A workaround is to **simulate a POST request** to Allociné's API and fetch data in a JSON format, but it needs authentication.

You can intercept such a request by running a **proxy server**. However, it needs to be trusted by installing CA certificate at system-level.
For this purpose, rooted device is mandatory.

In order to avoid rooting my own android device, I used the SDK platform to **emulate device** with writable system.
Once installed, I could listen traffic on my `mitmproxy` proxy.

## Credits
Gromez: https://wiki.gromez.fr/dev/api/allocine_v3
