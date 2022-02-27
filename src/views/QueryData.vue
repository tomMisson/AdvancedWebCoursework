<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12">
        <h4>Cardiomyopathy Type</h4>
        <select class="form-select" id="CMtype">
          <option value="HCM">Hypertrophic</option>
          <option value="DIL">Dilated</option>
          <option value="RES">Restrictive</option>
        </select>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <h4>Gene mutation</h4>
        <select class="form-select" id="Gene">
          <option value="HCM">Hypertrophic</option>
          <option value="DIL">Dilated</option>
          <option value="RES">Restrictive</option>
        </select>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <h4>First dimension</h4>
        <select class="form-select" id="fd">
          <option value="HCM">Hypertrophic</option>
          <option value="DIL">Dilated</option>
          <option value="RES">Restrictive</option>
        </select>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <h4>Second dimension</h4>
        <select class="form-select" id="sd">
          <option value="HCM">Hypertrophic</option>
          <option value="DIL">Dilated</option>
          <option value="RES">Restrictive</option>
        </select>
      </div>
      <button class="btn btn-success mt-3" id="submit" @click="generateGraph">
        Generate
      </button>
    </div>
    <div class="row">
      <h2 class="text-center mt-5">Graph type</h2>
      <label>
        <input type="radio" name="graph" value="bar" />
        Bar
      </label>
    </div>
    <div class="row my-5">
      <h2 class="text-center mt-2">Graph</h2>
      <!-- GRAPH HERE -->
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    function generateGraph() {
      console.log("Generate graph");
    }

    return { generateGraph };
  },
};
</script>