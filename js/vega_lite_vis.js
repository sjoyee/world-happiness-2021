var vg_1 = "js/choropleth_map.vg.json";
vegaEmbed("#choropleth_map", vg_1)
  .then(function (result) {})
  .catch(console.error);

var vg_2 = "js/area_chart.vg.json";
vegaEmbed("#area_chart", vg_2)
  .then(function (result) {})
  .catch(console.error);

var vg_3 = "js/s_bar_chart.vg.json";
vegaEmbed("#bar_chart", vg_3)
  .then(function (result) {})
  .catch(console.error);

var vg_4 = "js/parallel_coord.vg.json";
vegaEmbed("#parallel_chart", vg_4)
  .then(function (result) {})
  .catch(console.error);

var vg_5 = "js/rank_line_chart.vg.json";
vegaEmbed("#line_chart", vg_5)
  .then(function (result) {})
  .catch(console.error);