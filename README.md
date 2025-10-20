
# NiftyInvest.com — Frontend Demo

A modern, finance-inspired frontend website built as a demo version of NiftyInvest.com
.
This project showcases a hero section with looping background video, and a Tabulator-based interactive stock table that loads mock data from a local JSON file.

# Project Overview
The project is a simple yet realistic frontend-only implementation using HTML, CSS, and JavaScript.
It demonstrates key features common to professional finance dashboards — live-feeling visuals, clean typography, glassy dark theme, and real-time-like data tables.

## Main Sections

### 1.Hero Section:
#### - Full-screen layout with a **.webp** background image and a looping muted **.mp4** video layered above it.

#### - Centered tagline, subheading, and CTA button (“Explore features”).

#### - The video runs infinitely (autoplay muted loop playsinline) for smooth visual engagement.

### 2. Markets Section:
#### - Shows the line “Where the world does markets” and subtext encouraging users to join.

#### - Uses a combination of transparent background + dark gradient for a finance-grade look.

### 3. Stocks Table Section:

#### - Implemented using the Tabulator library.

#### - Displays mock stock data (symbols, price, change %, highs/lows) loaded from stocks.json.

#### - Interactive features: pagination, sorting, and row selection.

#### - Includes color-coded cells (green for profit, red for loss).

#### - Loader/spinner visible for a few seconds before data appears.


# Goal / Features

The project demonstrates:
- A full-screen **hero** with image + looping muted video overlay for motion (looks like TradingView hero).
- A **Markets** section with centered chart preview and CTA button.
- An interactive **Stocks table** using Tabulator loaded from a local `stocks.json` file (no API calls).
- UX touches: skeleton/loader (or Bootstrap spinner), custom theme (dark / finance look), color-coded changes (green for +, red for -), pagination and row selection.
- Code is intentionally simple so you can extend it quickly.

---

## Technologies used

- **Vanilla HTML / CSS / JavaScript** — minimal dependencies.
- **Tabulator (JS library)** — interactive grid/table (sorting, filtering, pagination, formatters). See Tabulator quickstart/examples. :contentReference[oaicite:3]{index=3}
- Static media: `.webp`, `.png`, `.jpeg`, `.mp4`.

---

## How the stock table (Tabulator) is implemented — summary

1. Tabulator is included via CDN (or can be installed with npm/yarn). The CDN approach used here simplifies the demo. :contentReference[oaicite:4]{index=4}

2. `stocks.json` is a local JSON file. The page uses `fetch()` to load the file and then calls `table.setData(data)` (Tabulator API) to populate the grid.

3. Table options used:
   - `layout: "fitColumns"` to make columns fill the container. :contentReference[oaicite:5]{index=5}
   - `pagination: "local"` with `paginationSize` for client-side paging.
   - Column `formatter` functions to show:
     - price formatted with two decimals and `₹` or `$`,
     - change field colored green/red using CSS classes,
     - percent change shown under the change number (custom formatter).
   - `selectable: true` to allow row selection and provide selection callbacks.

4. A simulated loader (skeleton or Bootstrap spinner) is shown for ~1–2s before the table data is loaded to simulate network delay and provide better UX.

5. Tabulator supports many advanced features (updating data with `updateData`, exporting, remote pagination, editors). See the Tabulator docs for expansion. :contentReference[oaicite:6]{index=6}

---

## Example: minimal Tabulator initialization (from this repo)

```js
// simple example in script.js
const table = new Tabulator("#stock-table", {
  data: [],               // filled after fetch
  layout: "fitColumns",
  pagination: "local",
  paginationSize: 5,
  selectable: true,
  columns: [
    { title: "Symbol", field: "symbol", headerFilter: "input" },
    { title: "Company", field: "name", widthGrow: 2, headerFilter: "input" },
    { title: "LTP (₹)", field: "ltp", hozAlign: "right", formatter: priceFormatter },
    { title: "Change", field: "change", hozAlign: "right", formatter: changeFormatter },
    { title: "% Change", field: "percentChange", hozAlign: "right" },
    { title: "Day Low", field: "dayLow", hozAlign: "right" },
    { title: "Day High", field: "dayHigh", hozAlign: "right" },
  ],
});

// after fetching local JSON:
fetch("stocks.json")
  .then(r => r.json())
  .then(data => {
    // hide loader
    table.setData(data);
  });
```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)




## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)



![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)




### Demo images (in repo)

![Hero preview](./future.png)         <!-- hero fallback / screenshot -->
![Aurora background](./aura.webp)     <!-- background behind video -->
![Interface mock 1](./Futuristic.jpeg) 
![Interface mock 2](./Futuristic1.jpeg)
![Logo](./nifty.png)


