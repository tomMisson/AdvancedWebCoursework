<template>
  <div class="container">
    <h1>Explore more</h1>
    <p>Looking to learn more about a specific mutation or Cardiomyopathy type? Simply enter a search term below and click to learn more</p>

    <form  @submit.prevent="submit" class="d-inline-flex">
      <select class="form-select" name="typeSelect" autofocus v-model="searchType">
        <option disabled value="">Please select one</option>
        <option value="gene" selected>Gene</option>
        <option value="cm">Term</option>
      </select>
      <input
        type="text"
        class="form-control mx-2 flex-grow-1"
        name="searchTerm"
        placeholder=""
        value
        required
        v-model="searchTerm"
        @keyup="search"
      />
    </form>

    <template v-if="geneResults">
      <div class="my-3">
        <div class="card my-1" v-for="result in geneResults" :key="result.entrezGeneId" @click="getDetails(result.entrezGeneId)">
          <div class="card-body" data-bs-toggle="modal" data-bs-target="#detailsModal">
            {{result.entrezGeneSymbol}}
          </div>
        </div>
      </div>
    </template>

    <template v-if="cmResults">
      <div class="my-3">
        <div class="card my-1" v-for="result in cmResults" :key="result.id" @click="getDetails(result.id)">
          <div class="card-body" data-bs-toggle="modal" data-bs-target="#detailsModal">
            {{result.name}}
          </div>
        </div>
      </div>
    </template>

    <!-- Modal -->
    <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{detailsResult.name}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{detailsResult.summary}}
            {{detailsResult.definition}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  searchForGenes,
  searchForCardioMyopathies,
  getGeneDetailsFromSearchResult,
  getCardiomyopathyDetailsFromSearchResult
} from "../scripts/genesearch";
import {ref} from "vue";
export default {
  setup() {
    const searchTerm = ref("");
    const searchType = ref("");

    const geneResults = ref([]);
    const cmResults = ref([]);
    const detailsResult = ref({});

    async function search(){
      geneResults.value = []
      cmResults.value = []

      switch (searchType.value) {
        case "gene":
          geneResults.value = await searchForGenes(searchTerm.value);
          break;
        case "cm":
          cmResults.value = await searchForCardioMyopathies(searchTerm.value);
          break;
      }
    }

    async function getDetails(id){
      detailsResult.value = {}
      switch (searchType.value) {
        case "gene":
          detailsResult.value = await getGeneDetailsFromSearchResult(id);
          break;
        case "cm":
          detailsResult.value = await getCardiomyopathyDetailsFromSearchResult(id);
          break;
      }
      console.log(detailsResult.value)
    }

    return {searchTerm, searchType, search, geneResults, cmResults, getDetails, detailsResult}
  }
}
</script>