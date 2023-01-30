var csv = require("csvtojson");

exports.cost_csv_to_db = function () {
  csv()
    .fromFile("../public/files/cost.csv")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
