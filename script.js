

document.addEventListener("DOMContentLoaded", () => {
  const stockContainer = document.getElementById("stock-cards");

  // placeholder skeletons
  showSkeletons(12); // 12 skeletons

  setTimeout(() => {
    fetch("stocks.json")
      .then((res) => res.json())
      .then((stocks) => {
        
        stockContainer.innerHTML = "";

        // Creatimg Cards
        stocks.forEach((stock) => {
          const card = document.createElement("div");
          card.classList.add("stock-card");

          const isPositive = stock.change > 0;
          const changeClass = isPositive ? "positive" : "negative";
          const changeText = `${isPositive ? "+" : ""}${stock.change} (${
            stock.percentChange
          }%)`;

          // card markup HTML
          card.innerHTML = `
              <div class="stock-header">
                <span class="stock-symbol">${stock.symbol}</span>
                <span class="stock-change ${changeClass}">${changeText}</span>
              </div>
              <div class="stock-name">${stock.name}</div>
              <div class="stock-price">₹${stock.ltp}</div>
              <div class="range">
                <small>Day Low: ₹${stock.dayLow}</small><br>
                <small>Day High: ₹${stock.dayHigh}</small>
              </div>
            `;

          stockContainer.appendChild(card);
        });

        // after cards, show Tabulator table below default view
        renderStockTable(stocks);
      })
      .catch((err) => {
        console.error("Failed to load stock data:", err);
        stockContainer.innerHTML = `<p style="color:red;">Error in Fetching Data(404)....</p>`;
      });
  }, 1000);

  function showSkeletons(count) {
    stockContainer.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const skeleton = document.createElement("div");
      skeleton.classList.add("stock-card", "skeleton-card");
      skeleton.innerHTML = `
          <div class="skeleton skeleton-header"></div>
          <div class="skeleton skeleton-line short"></div>
          <div class="skeleton skeleton-line medium"></div>
          <div class="skeleton skeleton-line long"></div>
        `;
      stockContainer.appendChild(skeleton);
    }
  }

  // Tabulator table refrence from (https://tabulator.info/docs/6.2/layout)
  function renderStockTable(stocks) {
    const tableContainer = document.getElementById("stock-table");
    if (!tableContainer) return;

    new Tabulator("#stock-table", {
      data: stocks,
      layout: "fitColumns",
      pagination: "local",
      paginationSize: 5,
      columns: [
        { title: "Symbol", field: "symbol", hozAlign: "center" },
        { title: "Company", field: "name", widthGrow: 2 },
        { title: "LTP (₹)", field: "ltp", hozAlign: "center" },
        { title: "Change", field: "change", hozAlign: "center" },
        { title: "% Change", field: "percentChange", hozAlign: "center" },
        { title: "Day Low", field: "dayLow", hozAlign: "center" },
        { title: "Day High", field: "dayHigh", hozAlign: "center" },
      ],
    });
  }
});
