var csv = require("csvtojson");
var Cost = require("./models/cost");
var dotenv = require("dotenv");
var async = require("async");
dotenv.config();

// database connection
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_KEY, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.on("open", () =>
  console.log(
    `\x1b[32mConnected to MongoDB:\x1b[30m \x1b[47m${db.name}\x1b[0m `
  )
);

async function parseCostData() {
  try {
    const res = await csv({ maxRowLength: 10 }).fromFile(
      "./public/files/cost.csv"
    );
    const parsed = await res.map((item, i) => {
      let [city, country, usa] = item.City.split(",");
      if (usa) {
        // return different objects depending on the format
        return {
          index: i,
          city: city.trim(),
          state: country.trim(),
          country: usa.trim(),
          costIndex: +item["Cost of Living Index"],
        };
      } else {
        return {
          index: i,
          city: city.trim(),
          country: country.trim(),
          costIndex: +item["Cost of Living Index"],
        };
      }
    });
    return parsed;
  } catch (err) {
    console.error(err);
  }
}

async function saveCostData() {
  try {
    const data = await parseCostData();
    Cost.create(data, () => console.log("finished"));
  } catch (err) {
    console.error(err);
  }
}

saveCostData();

function logCostData() {
  parseCostData()
    .then((res) => {
      console.log(res[0]);
    })
    .catch((err) => console.log(err));
}
