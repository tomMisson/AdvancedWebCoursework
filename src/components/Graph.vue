<template>
  <div>
    <apexchart
      width="100%"
      :type=type
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    chartOptions: Object,
    series: Object,
  },
};
</script>