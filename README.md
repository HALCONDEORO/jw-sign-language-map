# Sign-language congregations and groups: a source-based atlas

An independent, interactive map of aggregate figures reported by Jehovah's Witnesses for sign-language congregations, groups and publishers. Countries can have more than one sign language. A congregation's country is not the same thing as the language it uses.

**Open the map:** https://halcondeoro.github.io/jw-sign-language-map/

This is not an official JW website, a live directory or a complete world census. No personal or congregation-level directory is published. The interface and project documentation are in English.

## Read the map

1. Choose a data layer: **Meeting locator** (meeting-locator observations), **Dated news** (dated national news figures), or **Historical** (older documentary figures).
2. Choose congregations, groups or publishers. In the locator layer, the language selector can restrict the quantities to one exact language filter. The colors use the legend shown beneath the map.
3. Select a country or territory, or search for a country or sign-language label. The country card shows its aggregate figures, dates, language breakdown where available and the source links supporting the figure.
4. Use the table for sorting and filtering. Download CSV exports the current selection, with source links and dates.

**n/a means no figure is available, not zero.** A zero observed in one query does not prove absence. Blank CSV cells have the same meaning as n/a.

The layers must not be added together. They have different dates, scopes and collection methods. An increase in the observed sample is not evidence of real organizational growth. News figures retain qualifications such as approximately (≈), more than (>) or almost. Publishers are left blank unless the source gives a figure specifically for sign-language activity.

Groups and pregroups are separate categories. A combined figure for congregations and groups is not converted into a count for either category. Branch territories and language-wide figures are not assigned to a single country without evidence. Those figures appear in a separate disclosure, outside national totals.

## Current published research cut

As of 21 November 2026: 320 additional geographic/country-focused queries, 420 queued rectangles and 0 rectangles at the depth limit. The published locator sample contains 1073 classified congregations and 771 classified groups in 117 countries/territories, covering 99 language filters and 133 country-language rows. The news layer has 22 national rows with their original dates.

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

Official news and yearbooks supply dated quantities. The source's scope, date and qualifications are retained. Older figures are not silently merged into newer figures. Independent language catalogs, including Glottolog, and Deaf-led sources help prepare country-language search candidates. Catalog classification, recognized legal status, current language use and evidence of meetings are different things.

A country can have several sign languages and a sign language can occur in several countries. For example, a record labeled Russian Sign Language in another country does not establish that country's national sign language.

### Geography and population

Country/territory assignment uses simplified Natural Earth polygons. Small islands, coastlines and ambiguous points can remain unclassified. The map is schematic, not a boundary authority. The count of mapped areas includes territories, not only sovereign states.

Groups per million uses World Bank population for 2025: `groups in the selected layer / population × 1,000,000`. Dates can differ. The result does not measure the Deaf population, accessibility, unmet need or service coverage.

## Files

| File | Contents |
| --- | --- |
| `index.html` | Self-contained map. Download and open in a current browser, with no server or installation. |
| `evidence.json` | Aggregate rows, source URLs, metadata and research-state information. |
| `query-ledger.csv` | Non-personal request ledger, including language, date, broad search bounds and response size. |
| `cobertura-zonas.csv` | Per-language research progress. This is not a territorial coverage percentage. |
| `source_archive.py` | Reconstructable editable source archive, described below. |
| `THIRD_PARTY_NOTICES.md` | Third-party attribution and license notices. |

The map makes no automatic network requests. Libraries, map geometry and aggregate data are embedded. Source links open only when selected. No external map tiles or analytics are loaded.

### Rebuild or edit

Download `source_archive.py` to an empty directory and inspect it before running:

```sh
python source_archive.py
```

Python 3 and its standard library are sufficient. The script checks the embedded archive's SHA-256, extracts it into `source/`, and runs `source/build_standalone.py`. It does not use the network. Open `source/index.html` in a browser.

The extracted directory contains editable HTML/JavaScript templates, CSS, aggregate data, geography, vendor libraries and licenses, plus `noticias.csv`, `localizador.csv`, `cobertura-zonas.csv` and `query-ledger.csv`. To rebuild after edits:

```sh
python source/build_standalone.py
```

This source package does not contain the live collector or individual meeting data. It contains no PDF files. The source build and the running interface are checked on desktop and at 320, 390 and 768 px widths, including sorting, filters, CSV, source links, missing values and distinct layers.

## Sources

- Public meeting locator and language catalog: https://hub.jw.org/meetings/en/goto/entry-point/meetings and https://hub.jw.org/meetings/api/languages
- Original news/yearbook URLs are attached to their individual data rows.
- Glottolog 5.4, language/country research leads: https://glottolog.org/download . Hammarström, Harald; Forkel, Robert; Haspelmath, Martin; Bank, Sebastian (2026), Max Planck Institute for Evolutionary Anthropology. CC BY 4.0. Its categories and country associations are not claims of meetings or legal recognition.
- World Federation of the Deaf, national sign-language recognition research: https://wfdeaf.org/the-legal-recognition-of-national-sign-languages/
- Natural Earth administrative geography: https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_admin_0_countries.geojson
- World Bank population: https://data.worldbank.org/indicator/sp.pop.totl and https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?date=2025&format=json&per_page=400

## Privacy, attribution and reuse

The public repository was requested by its owner. It excludes personal data, congregation names, contacts, addresses, meeting coordinates and individual meeting identifiers. Broad geographic request bounds are search parameters, not meeting locations. No account credentials or account data are published.

D3-geo 3.1.2 and d3-array 3.2.5 use the ISC license; world-atlas 2.0.2 uses ISC; Natural Earth is public domain. World Bank population data is attributed under CC BY 4.0. Full applicable vendor notices are supplied in the editable source archive and `THIRD_PARTY_NOTICES.md`. No JW photographs, logos, videos or full articles are republished. No general redistribution license has yet been granted for the project's original code. Public access to the repository is not a blanket license for every source.

This independent research has no affiliation with or endorsement from JW.org, Glottolog, WFD or the World Bank. Publication uses free GitHub Pages; no payment is required to view the map.
