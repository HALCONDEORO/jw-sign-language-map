**Live interactive atlas: [Open the map](https://halcondeoro.github.io/jw-sign-language-map/)**

# Sign-language congregations and groups: a source-based atlas

An independent, interactive map of aggregate figures reported by Jehovah's Witnesses for sign-language congregations, groups and publishers. Countries can have more than one sign language. A congregation's country is not the same thing as the language it uses.

This is not an official JW website, a live directory or a complete world census. No personal or congregation-level directory is published. The interface and project documentation are in English.

## Publication status and remaining evidence gaps

The map is **v10, released on 22 November 2026**, with clearer country-card scope, direct Map/Table controls and larger mobile controls. Its locator observations are the unchanged v9 research cut. The planned locator search tree is complete, but the evidence is not a complete world census. Further research must not be confused with unsearched countries or new organizational growth.

Work now focuses on these unresolved gaps:

- **Country assignment:** 14 congregations and 17 groups are observed but excluded from country totals because their returned locations could not be assigned to one country with the current land polygons. A nearby coast or country is a research lead, not sufficient evidence for reassignment.
- **Unavailable exact language filters:** Armenian, Catalan, Dominican, Eritrean, Georgian, Hong Kong, Lebanese, Maltese, Singapore, Slovenian, Trinidad and Tobago, and Ukrainian Sign Languages appear in the publication catalogue but have no exact-name counterpart in the recorded locator catalogue comparison. This does not prove that meetings are absent. A publication language, a spoken-language filter, or another sign language used in the same country cannot substitute for verified meeting evidence.
- **Remote-only meetings:** no verified, deduplicated total is available. Remote and in-person observations must not be added without evidence that they refer to different entities.

New documentary findings will retain their original date and qualifiers. They will not replace current locator observations or turn an unknown value into zero. The downloadable source archive reproduces this v10 interface and aggregate data, including the unchanged v9 locator observations. It also includes this README.

## Read the map

1. The initial view shows meeting-locator figures. Dated news and historical observations are integrated as separate sections in each country card, never summed. For secondary map views, open Filters and choose Map data: **Meeting locator** (meeting-locator observations), **Dated news** (dated national news figures), or **Historical** (older documentary figures).
2. Choose congregations, groups or publishers. In the locator layer, the language selector can restrict the quantities to one exact language filter. The colors use the legend shown beneath the map.
3. Select a country or territory, or search for a country or sign-language label. The country card shows its aggregate figures, dates, language breakdown where available and the source links supporting the figure.
4. Switch directly between Map and Table without clearing your filters. The controls stay available at the bottom of the screen on phones. Tap a country or use Open country figures for a full-screen card, with Map and Table actions at the top. Use the table for sorting and filtering. Download CSV exports the current selection, with source links and dates.

**n/a means no figure is available, not zero.** A zero observed in one query does not prove absence. Blank CSV cells have the same meaning as n/a.

In the historical layer, the archive-date selector defaults to the latest archived figure for each country. Choose a source date to inspect an older observation. Multiple dates for the same country are never added together. The latest news layer remains separate and can contain a newer figure.

The layers must not be added together. They have different dates, scopes and collection methods. An increase in the observed sample is not evidence of real organizational growth. News figures retain qualifications such as approximately (≈), more than (>) or almost. Publishers are left blank unless the source gives a figure specifically for sign-language activity.

Groups and pregroups are separate categories. A combined figure for congregations and groups is not converted into a count for either category. Branch territories and language-wide figures are not assigned to a single country without evidence. Those figures appear in a separate disclosure, outside national totals.

### Legal context is separate from quantities

Red diagonal hatching indicates documented legal bans or restrictions on worship (Russia and Eritrea). Red dots indicate conscientious-objection prosecutions (Singapore and Ukraine, the latter during mobilization), not a general ban on worship. The official supporting report is explicitly current as of November 2026. Each country card states its own category and links to the source. The map does not treat the separate Crimea section of that report as evidence about Ukrainian authorities, change borders or add a separate country. The overlay is not sign-language-specific and never means a numeric zero. Absence of an overlay does not prove unrestricted activity. Tayikistan, Uzbekistan and Turkmenistan have not been added from older or undated sources.

## Current published research cut

As of 2026-11-22: 1526 additional geographic/country-focused queries, 0 queued rectangles and 0 rectangles at the depth limit. The published locator sample contains 1572 classified congregations and 1095 classified groups in 128 countries/territories, covering 100 language filters and 136 country-language rows. The news layer has 22 national rows with their original dates. With the same observations, the finer 1:10m country polygons classify 48 more congregations and 43 more groups than the previous 1:110m polygons. Those differences are reclassification, not new observations. 14 congregations and 17 groups remain unclassified. The aggregate comparison is recorded in evidence.json.

These are research-state figures for this repository, not coverage percentages. Process counters, the queue and collection logs are not part of the map interface. The initial locator sweep queried 101 sign-language filters; 25 responses reached the 25-place response limit.

## Collection method

### Meeting locator

- Anonymous, public requests only. No account login, cookies or credentials are used by the collector.
- One collector, sequential requests, at least 25 seconds between requests. Stop on errors, throttling, unexpected responses or challenges; no automatic retry to work around a block.
- Start with a worldwide query for each available sign-language filter. Also inspect four broad world sectors for each filter, including filters whose initial query returned fewer than 25 places.
- Prioritize country-focused searches for the country's own sign-language candidates. These targets are research leads, not proof of legal national status or current use. Later passes cover additional sign languages used in each country, including cross-border and migrant communities.
- Subdivide a search rectangle when it returns 25 places. A bounding rectangle can include neighboring countries; results are classified by their returned location, never by the intended search-country label.
- Deduplicate congregation and group identifiers across all requests for a language before counting. Only aggregates are published. Internal identifiers, names, contact details, meeting times, addresses and individual meeting coordinates are excluded from every published file.
- Each country-language row links to a set of actual queries whose combined returned entities support the published count. The complete non-personal query ledger remains in the repository.
- A response below 25, or an exhausted queue, does not establish completeness. The locator's language catalog is not identical to the publication-language catalog. Similar names, country labels and spoken-language codes are not used as automatic substitutes for unavailable sign-language filters.

### Documentary figures and language research

The JW publication selector lists 113 sign languages; the locator lists 101 exact corresponding filters. Twelve publication-only labels remain explicit research leads. Catalogs were checked on 21 November 2026 at https://www.jw.org/en/choose-language?onlySL=1 and https://hub.jw.org/meetings/api/languages . These are catalog counts, not meeting counts.

Official news and yearbooks supply dated quantities. The source's scope, date and qualifications are retained. Older figures are not silently merged into newer figures. Independent language catalogs, including Glottolog, and Deaf-led sources help prepare country-language search candidates. Catalog classification, recognized legal status, current language use and evidence of meetings are different things.

A country can have several sign languages and a sign language can occur in several countries. For example, a record labeled Russian Sign Language in another country does not establish that country's national sign language.

### Geography and population

Country/territory assignment uses full Natural Earth 1:10m polygons, separately from the schematic display map. The display combines the original simplified world outline with smaller territories absent from it. Points outside the classification polygons or in ambiguous overlaps remain unclassified; they are never snapped to the nearest country. Reclassification after a geography update changes national samples without showing real organizational growth. Small islands and coastlines can still be missing or uncertain. The map is schematic, not a boundary authority. The count of mapped areas includes territories, not only sovereign states.

Groups per million uses World Bank population for 2025: `groups in the selected layer / population × 1,000,000`. Dates can differ. The result does not measure the Deaf population, accessibility, unmet need or service coverage.

## Files

| File | Contents |
| --- | --- |
| `index.html` | Self-contained map. Download and open in a current browser, with no server or installation. |
| `evidence.json` | Aggregate rows, source URLs, metadata and research-state information. |
| `query-ledger.csv` | Non-personal request ledger, including language, date, broad search bounds and response size. |
| `search-progress.csv` | Per-language research progress. This is not a territorial coverage percentage. |
| `source_archive.py` | Reconstructable editable source archive, described below. |
| `jw-sign-language-catalog.json` | Official JW publication-language catalog, checked against exact locator labels. Catalog presence is not meeting evidence. |
| `language-research-queue.json` | Publication-only language labels needing separate meeting evidence; no invented locator filters. |
| `THIRD_PARTY_NOTICES.md` | Third-party attribution and license notices. |

The map makes no automatic network requests. Libraries, map geometry and aggregate data are embedded. Source links open only when selected. No external map tiles or analytics are loaded.

### Rebuild or edit

For the repository download, save `source_archive.py` to an empty directory and inspect it before running:

```sh
python source_archive.py
```

Python 3 and its standard library are sufficient. The script checks the embedded archive's SHA-256, extracts it into `source/`, and runs `source/build_standalone.py`. It does not use the network. Open `source/index.html` in a browser.

If you received the editable source ZIP instead, extract it and run `python build_standalone.py` inside its root directory. Open the resulting `index.html`; no wrapper is needed for that ZIP.

The extracted directory contains editable HTML/JavaScript templates, CSS, aggregate data, geography, vendor libraries and licenses, plus `news.csv`, `historical.csv`, `locator.csv`, `search-progress.csv` and `query-ledger.csv`. To rebuild after edits:

```sh
python source/build_standalone.py
```

This source package does not contain the live collector or individual meeting data. It contains no PDF files. The source build and the running interface are checked on desktop and at 320, 390 and 768 px widths, including sorting, filters, CSV, source links, missing values and distinct layers.

## Sources

- Public meeting locator and language catalog: https://hub.jw.org/meetings/en/goto/entry-point/meetings and https://hub.jw.org/meetings/api/languages
- Original news/yearbook URLs are attached to their individual data rows.
- Glottolog 5.4, language/country research leads: https://glottolog.org/download . Hammarström, Harald; Forkel, Robert; Haspelmath, Martin; Bank, Sebastian (2026), Max Planck Institute for Evolutionary Anthropology. CC BY 4.0. Its categories and country associations are not claims of meetings or legal recognition.
- World Federation of the Deaf, national sign-language recognition research: https://wfdeaf.org/the-legal-recognition-of-national-sign-languages/
- Natural Earth 1:10m point-classification geography: https://raw.githubusercontent.com/nvkelso/natural-earth-vector/v5.1.2/geojson/ne_10m_admin_0_countries.geojson
- Original Natural Earth simplified display geography: https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_admin_0_countries.geojson
- World Bank population: https://data.worldbank.org/indicator/sp.pop.totl and https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?date=2025&format=json&per_page=400

## Privacy, attribution and reuse

The public repository was requested by its owner. It excludes personal data, congregation names, contacts, addresses, meeting coordinates and individual meeting identifiers. Broad geographic request bounds are search parameters, not meeting locations. No account credentials or account data are published.

D3-geo 3.1.2 and d3-array 3.2.5 use the ISC license; world-atlas 2.0.2 uses ISC; Natural Earth is public domain. World Bank population data is attributed under CC BY 4.0. Full applicable vendor notices are supplied in the editable source archive and `THIRD_PARTY_NOTICES.md`. No JW photographs, logos, videos or full articles are republished. No general redistribution license has yet been granted for the project's original code. Public access to the repository is not a blanket license for every source.

This independent research has no affiliation with or endorsement from JW.org, Glottolog, WFD or the World Bank. Publication uses free GitHub Pages; no payment is required to view the map.

## Mobile and dated people figures

The initial view uses the meeting-locator sample. Each country card also has separate dated documentary evidence, never added to locator observations. Filters & view contains secondary map-data views. On mobile, selecting or searching for a country fits the map to it; map controls and Back to map have large touch targets.

Dated people figures show the source qualifier and date. These are not current publisher counts. Attendance is a separate event measure, never a publisher estimate or an addition to the publisher count. Two attendance observations are included: more than 3,000 at Brazil deaf district conventions in 2001 (article dated 1 February 2003), and 2,317 in-person attendees at the Mexican Sign Language Bible release on 1 January 2023 (article dated 17 January 2023). Unquantified livestream viewers are not included. See attendance.csv for the official sources and scope.

## Publication-language catalogue and worldwide language totals

The interface includes the official JW publication selector catalogue of 113 sign languages, checked on 21 November 2026. Of these, 12 had no exact-name meeting-locator filter in the recorded catalogue comparison. Publication availability is not evidence of meetings. The catalogue includes a separate source link for each language.

Selecting a meeting-locator language displays its worldwide observed congregations, groups and countries/territories. This worldwide summary is independent of country search and continent filters; the map and country table retain their own filters. It is a sample, not a census.

## v9 research update

The locator collection queue was exhausted on 22 November 2026 at 14:24:58 UTC, after 1,526 regional queries plus 101 separately recorded initial language-filter queries. This closes the planned query tree, not a world census. Both depth-8 truncated boxes were refined at depth 9; no depth-limit truncations remain in that recorded tree.

Compared with approved v8, the classified sample adds 13 congregations and 21 groups: Belize (ASL) 0/3; Brazil (LSB) 270/243; Gabon (CML) 3/3; Haiti (ASL) 5/4; Japan (JSL) 5/44. Fourteen congregations and 17 groups remain geographically unclassified and are excluded from country totals. Figures describe observations, not organizational growth.

Kosovo metadata is corrected from Africa to Europe. Metadata joins now use an unambiguous exact administrative name first, then a unique valid numeric ISO key. The shared missing-value sentinel -99 is never used as an ISO join key. Regressions cover Kosovo, Northern Cyprus and Somaliland; this does not change sovereignty labels, borders or congregation quantities. Natural Earth source: https://raw.githubusercontent.com/nvkelso/natural-earth-vector/v5.1.2/geojson/ne_10m_admin_0_countries.geojson .
