const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const helmet = require("helmet");

const app = express();
const PORT = 3000;

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  contentSecurityPolicy: false
}));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const dataPath = path.join(__dirname, "data.js");
const dataContent = fs.readFileSync(dataPath, "utf-8");
const nabsepatuData = (new Function(
  dataContent.replace("const nabsepatuData = ", "return ")
))();

app.get("/api/products", (req, res) => {
  const { category, subcategory, search } = req.query;
  let results = [];

  const categories = ["brand", "sport", "pria"];

  if (category && nabsepatuData[category]) {
    const subs = nabsepatuData[category].subcategories;
    if (subcategory && subs[subcategory]) {
      results = subs[subcategory].products.map(p => ({ ...p, category, subcategory }));
    } else {
      Object.keys(subs).forEach(key => {
        subs[key].products.forEach(p => results.push({ ...p, category, subcategory: key }));
      });
    }
  } else {
    categories.forEach(cat => {
      const subs = nabsepatuData[cat].subcategories;
      Object.keys(subs).forEach(key => {
        subs[key].products.forEach(p => results.push({ ...p, category: cat, subcategory: key }));
      });
    });
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  res.json({ success: true, total: results.length, products: results });
});

app.get("/api/categories", (req, res) => {
  const summary = {};
  Object.keys(nabsepatuData).forEach(cat => {
    summary[cat] = {
      label: nabsepatuData[cat].label,
      subcategories: {}
    };
    Object.keys(nabsepatuData[cat].subcategories).forEach(sub => {
      summary[cat].subcategories[sub] = {
        label: nabsepatuData[cat].subcategories[sub].label,
        count: nabsepatuData[cat].subcategories[sub].products.length
      };
    });
  });
  res.json({ success: true, categories: summary });
});

app.listen(PORT, () => {
  console.log("=================================");
  console.log("  nab.sepatu - Toko Sepatu Online");
  console.log("  Server: http://localhost:" + PORT);
  console.log("  API:    http://localhost:" + PORT + "/api/products");
  console.log("=================================");
});
