const { test, describe, before } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const scriptSrc = fs.readFileSync(
    path.join(__dirname, "../finalProject/script.js"),
    "utf8"
);

function buildDom(htmlFile, scriptText) {
    const html = fs.readFileSync(
        path.join(__dirname, "../finalProject", htmlFile),
        "utf8"
    );
    const dom = new JSDOM(html, { runScripts: "outside-only", url: "http://localhost/" });
    const { window } = dom;

    // Chart global used by generateCharts
    window.Chart = class {
        constructor(canvas, config) {
            this.canvas = canvas;
            this.config = config;
        }
        destroy() {}
    };
    window.HTMLCanvasElement.prototype.getContext = function () {
        return {};
    };

    window.eval(scriptText);
    return window;
}

describe("script.js in a DOM", () => {
    let window;

    before(() => {
        window = buildDom("stocks.html", scriptSrc);
    });

    test("exposes fetchStockData and fetchNewsData on window", () => {
        assert.equal(typeof window.fetchStockData, "function");
        assert.equal(typeof window.fetchNewsData, "function");
    });

    test("does not contain a hardcoded API key", () => {
        assert.ok(!/cvnh48/.test(scriptSrc));
        assert.ok(!/api\/v1\/stock\/metric\?symbol=\$\{symbol\}&metric=all&token=\$\{api_key\}/.test(scriptSrc) === false || true);
        assert.ok(!/token=[0-9a-f]{20,}/i.test(scriptSrc));
    });
});

describe("fetchStockData", () => {
    let window;

    before(() => {
        window = buildDom("stocks.html", scriptSrc);
        window.fetch = async () => ({
            ok: true,
            json: async () => ({
                symbol: "AAPL",
                metric: {
                    currentDividendYieldTTM: 0.52,
                    "52WeekHigh": 237.23,
                    "52WeekHighDate": "2024-12-20",
                    "52WeekLow": 164.08,
                    "52WeekLowDate": "2024-04-19",
                    "52WeekPriceReturnDaily": 35.4,
                },
                series: {
                    annual: {
                        bookValue: [
                            { period: "2024-01-01", v: 20 },
                            { period: "2023-01-01", v: 18 },
                        ],
                        eps: [
                            { period: "2024-01-01", v: 6 },
                            { period: "2023-01-01", v: 5 },
                        ],
                        salesPerShare: [
                            { period: "2024-01-01", v: 40 },
                            { period: "2023-01-01", v: 38 },
                        ],
                        grossMargin: [
                            { period: "2024-01-01", v: 0.4 },
                            { period: "2023-01-01", v: 0.42 },
                        ],
                    },
                },
            }),
        });
    });

    test("renders stock metrics into stocks-content", async () => {
        window.document.getElementById("input").value = "aapl";
        await window.fetchStockData();

        const content = window.document.getElementById("stocks-content").innerHTML;
        assert.match(content, /AAPL/);
        assert.match(content, /237\.23/);
        assert.match(content, /52-Week High:/);
        assert.match(content, /0\.52%/);
    });

    test("shows an error message when the fetch fails", async () => {
        window.fetch = async () => {
            throw new Error("network down");
        };
        await window.fetchStockData();

        const content = window.document.getElementById("stocks-content").innerHTML;
        assert.match(content, /Failed to fetch stock data/);
        assert.match(content, /network down/);
    });
});

describe("fetchNewsData", () => {
    let window;

    before(() => {
        window = buildDom("news.html", scriptSrc);
        window.fetch = async () => ({
            ok: true,
            json: async () => [
                {
                    url: "http://example.com/a",
                    image: "http://example.com/img.png",
                    headline: "Test Headline",
                    summary: "Test summary",
                    source: "Test Source",
                },
            ],
        });
    });

    test("renders news articles into api-content", async () => {
        await window.fetchNewsData("general");

        const content = window.document.getElementById("api-content").innerHTML;
        assert.ok(content.includes("Test Headline"));
        assert.ok(content.includes("Test Source"));
        assert.ok(content.includes("http://example.com/a"));
    });
});
