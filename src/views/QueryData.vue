<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <h4>Gene mutation</h4>
        <select class="form-select" id="Gene" v-model="geneSelection">
          <option value="">Select one</option>
          <option
            v-for="mutation in mutationTypes"
            :value="mutation"
            :key="mutation"
          >
            {{ mutation }}
          </option>
        </select>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <h4>First dimension</h4>
        <select class="form-select" id="fd" v-model="firstDimension">
          <option disabled value="">Select one</option>
          <option
            v-for="dimension in dimensions"
            :value="dimension"
            :key="dimension"
          >
            {{ dimension }}
          </option>
        </select>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <h4>Second dimension</h4>
        <select class="form-select" id="sd" v-model="secondDimension">
          <option value="">Select one</option>
          <option
            v-for="dimension in dimensions"
            :value="dimension"
            :key="dimension"
            :disabled="dimension === firstDimension"
          >
            {{ dimension }}
          </option>
        </select>
      </div>
      <button class="btn btn-success mt-3" id="submit" @click="generateGraph">
        Generate
      </button>
      <div v-if="error.error" class="alert alert-danger my-2" role="alert">
        {{ error.errorMessage }}
      </div>
    </div>
    <div class="col">
      <h2 class="text-center mt-3">Graph type</h2>
      <div class="mt-5 text-center">
        <label class="mx-2">
          <input
            checked
            type="radio"
            class="form-check-input"
            name="graph"
            value="bar"
            v-model="graphType"
          />
          Bar
        </label>
        <label class="mx-2">
          <input
            type="radio"
            class="form-check-input"
            name="graph"
            value="line"
            v-model="graphType"
          />
          Line
        </label>
        <label class="mx-2">
          <input
            type="radio"
            class="form-check-input"
            name="graph"
            value="area"
            v-model="graphType"
          />
          Area
        </label>
        <label class="mx-2">
          <input
            type="radio"
            class="form-check-input"
            name="graph"
            value="scatter"
            v-model="graphType"
          />
          Scatter
        </label>
      </div>
    </div>
    <div class="row my-5">
      <h2 class="text-center mt-2">Graph</h2>
      <graph
        :type="graphType"
        :series="series"
        :chartOptions="chartOptions"
        class="my-4 text-center"
      />
    </div>
  </div>
</template>

<script>
import Graph from "@/components/Graph";
import {
  getSelectionsForGraphing,
  getDataForDimension,
} from "../scripts/graphing";
import { ref, onMounted, reactive } from "vue";

export default {
  components: {
    Graph,
  },
  setup() {
    const graphType = ref("bar");
    const dimensions = ref({});
    const mutationTypes = ref({});

    const cmType = ref("Hypertrophic");
    const geneSelection = ref("");
    const firstDimension = ref("");
    const secondDimension = ref("");

    const error = reactive({
      error: false,
      errorMessage: "",
    });

    const chartOptions = ref({});
    const series = ref([]);

    onMounted(async () => {
      const filters = await getSelectionsForGraphing();
      dimensions.value = filters.dimensions;
      mutationTypes.value = filters.mutationTypes;
    });

    function convertOccourancesToDataPoints(occourances) {
      return Object.keys(occourances).map((key) => {
        return {
          x: key,
          y: occourances[key],
        };
      });
    }

    async function generateGraph() {
      error.error = false;
      let baseChartOptions = {
        title: {
          text: "",
          align: "left",
        },
        xaxis: {
          title: {
            text: "",
          },
          labels: {
            show: false,
          },
        },
        yaxis: [
          {
            title: {
              text: "",
            },
            labels: {
              formatter: (value) => {
                return isNaN(value) ? value : Math.round(value * 100) / 100;
              },
            },
          },
          {
            opposite: true,
            title: {
              text: "",
            },
            labels: {
              formatter: (value) => {
                return isNaN(value) ? value : Math.round(value * 100) / 100;
              },
            },
            colors: ["#008ffb"],
          },
        ],
      };

      if (
        firstDimension.value ||
        (firstDimension.value && secondDimension.value)
      ) {
        try {
          //Get data for dimensions and filters
          var resultsObj = await getDataForDimension(
            geneSelection.value,
            firstDimension.value,
            secondDimension.value
          );

          // Set chart title
          baseChartOptions.title.text = `${firstDimension.value} ${
            secondDimension.value ? "against " + secondDimension.value : ""
          } ${geneSelection.value ? "filtered by " + geneSelection.value : ""}`;

          if (resultsObj.dataType === "numeric") {
            baseChartOptions.yaxis[0].title.text = firstDimension.value;
            baseChartOptions.yaxis[1].title.text = secondDimension.value;
            baseChartOptions.xaxis.title.text = geneSelection.value;
          } else {
            baseChartOptions.xaxis.title.text = `${firstDimension.value} ${
              secondDimension.value ? "against " + secondDimension.value : ""
            }`;
            baseChartOptions.xaxis.labels.show = true;
          }

          chartOptions.value = baseChartOptions;

          // Chart Data
          const chartData =
            resultsObj.dataType === "numeric"
              ? resultsObj.dataPoints
              : convertOccourancesToDataPoints(resultsObj.occurrences);

          const chartData2 =
            resultsObj.dataType2 === "numeric"
              ? resultsObj.dataPoints2
              : convertOccourancesToDataPoints(resultsObj.occurrences);

          if (
            (resultsObj.dataType === "numeric" &&
              resultsObj.dataType2 === "category") ||
            (resultsObj.dataType === "category" &&
              resultsObj.dataType2 === "numeric")
          ) {
            error.error = true;
            error.errorMessage =
              "Cannot compare two different data types. Please select different dimensions.";
            return;
          }

          let seriesArray = [
            {
              name: firstDimension.value,
              data: chartData,
            },
          ];

          console.log(chartData);
          console.log(chartData2);

          if (chartData2.length > 0) {
            seriesArray.push({
              name: secondDimension.value,
              data: chartData2,
            });
          }

          series.value = seriesArray;
        } catch (err) {
          error.error = true;
          error.errorMessage = err;
        }
      } else {
        error.error = true;
        error.errorMessage = "Please select at least 1 dimension";
      }
    }

    return {
      cmType,
      geneSelection,
      firstDimension,
      secondDimension,
      generateGraph,
      dimensions,
      mutationTypes,
      graphType,
      series,
      chartOptions,
      error,
    };
  },
};
</script>
