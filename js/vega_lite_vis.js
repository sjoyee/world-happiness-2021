var vg_1 = "js/choropleth_map.vg.json";
vegaEmbed("#choropleth_map", vg_1)
  .then(function (result) {})
  .catch(console.error);

var vg_2 = "js/line_chart.vg.json";
vegaEmbed("#line_chart", vg_2)
  .then(function (result) {})
  .catch(console.error);

var vg_3 = "js/s_bar_chart.vg.json";
vegaEmbed("#bar_chart", vg_3)
  .then(function (result) {})
  .catch(console.error);

var vg_4 = "js/health.vg.json";
vegaEmbed("#scatterplot_health", vg_4)
  .then(function (result) {})
  .catch(console.error);

var vg_5 = "js/gdp.vg.json";
vegaEmbed("#scatterplot_gdp", vg_5)
  .then(function (result) {})
  .catch(console.error);

var vg_6 = "js/rank.vg.json";
vegaEmbed("#rank_chart", vg_6)
  .then(function (result) {})
  .catch(console.error);