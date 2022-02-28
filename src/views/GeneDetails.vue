<!-- This page needs work, just delete all the code here, it's just duplicated from the QueryData file/page -->

<template>
  <h1>Mutation X</h1>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12">
        <h4>Gene Type</h4>
        <select class="form-select" id="CMtype">
          <option
            v-for="CMtype in CMtypes"
            :value="CMtype.shortName"
            :key="CMtype.shortName"
          >
            {{ CMtype.name }}
          </option>
        </select>
      </div>

      <p>Text goes here</p>
      <p>
        <!-- GRAPH HERE -->
      </p>
    </div>
  </div>
</template>

<script>
import { dimensions, mutationTypes, CMtypes } from "../scripts/graphing";
export default {
  setup() {
    function generateGraph() {
      console.log("Generate graph");
    }

    return { generateGraph, dimensions, mutationTypes, CMtypes };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

p {
  text-align: center;
}
</style>
