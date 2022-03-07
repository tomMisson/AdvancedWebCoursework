<template>
  <div class="container">
    <h1>Explore</h1>
    <p>
      On this page you can query our database as well as external databases to
      learn more about different cardiomyopathy types as well as their
      associated gene mutations.
    </p>
    <h2 class="mt-5">Explore our database</h2>
    <select
      name="cmType"
      class="form-select"
      autofocus
      v-model="selectedCMtype"
      @change="getDetailsFromFirestore"
    >
      <option disabled value="" selected>Select a cardiomyopathy type</option>
      <option v-for="cmType in cmTypes" :value="cmType" :key="cmType">
        {{ cmType }}
      </option>
    </select>

    <template v-if="cmDetails[0]">
      <div class="card mt-4">
        <h3 class="card-header">{{ cmDetails[0] }} cardiomyopathy</h3>
        <div class="card-body">
          <p class="card-text">{{ cmDetails[1]?.desc }}</p>
          <p class="card-text">
            <strong>Associated genes:</strong>
            <br />
            {{ cmDetails[1]?.genes.join(", ") }}
          </p>
        </div>
      </div>
    </template>

    <h2 class="mt-5">Explore externally</h2>
    <p>
      Looking to learn more about a specific mutation or Cardiomyopathy type?
      Simply enter a search term below and click to learn more
    </p>

    <form @submit.prevent="submit" class="d-inline-flex">
      <select
        class="form-select"
        name="typeSelect"
        v-model="searchType"
        @change="search"
      >
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
        <div
          class="card my-1"
          v-for="result in geneResults"
          :key="result.entrezGeneId"
          @click="getDetails(result.entrezGeneId)"
        >
          <div
            class="card-body"
            data-bs-toggle="modal"
            data-bs-target="#detailsModal"
          >
            {{ result.entrezGeneSymbol }}
          </div>
        </div>
      </div>
    </template>

    <template v-if="cmResults">
      <div class="my-3">
        <div
          class="card my-1"
          v-for="result in cmResults"
          :key="result.id"
          @click="getDetails(result.id)"
        >
          <div
            class="card-body"
            data-bs-toggle="modal"
            data-bs-target="#detailsModal"
          >
            {{ result.name }}
          </div>
        </div>
      </div>
    </template>

    <!-- Modal -->
    <div
      class="modal fade"
      id="detailsModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ detailsResult.name }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {{ detailsResult.summary }}
            {{ detailsResult.definition }}
          </div>
          <div class="modal-footer">
            <a target="_blank" :href="detailsResult.href"
              ><button type="button" class="btn btn-primary">
                View more
              </button></a
            >
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
  getCardiomyopathyDetailsFromSearchResult,
} from "../scripts/genesearch";

import {
  getCMTypes,
  getDetailsForCMType,
} from "../scripts/exploredatabaseCMdetails";

import { ref, onMounted } from "vue";

export default {
  setup() {
    const cmTypes = ref([]);
    const selectedCMtype = ref("");
    const cmDetails = ref({});

    const searchTerm = ref("");
    const searchType = ref("");

    const geneResults = ref([]);
    const cmResults = ref([]);
    const detailsResult = ref({});

    onMounted(async () => {
      cmTypes.value = await getCMTypes();
    });

    async function getDetailsFromFirestore() {
      cmDetails.value = {};
      cmDetails.value = await getDetailsForCMType(selectedCMtype.value);
    }

    async function search() {
      geneResults.value = [];
      cmResults.value = [];

      switch (searchType.value) {
        case "gene":
          geneResults.value = await searchForGenes(searchTerm.value);
          break;
        case "cm":
          var results = await searchForCardioMyopathies(searchTerm.value);
          console.log(
            results.filter((obj) => obj.name.includes("cardiomyopathy"))
          );

          cmResults.value = results.filter((obj) =>
            obj.name.includes("cardiomyopathy")
          );

          break;
      }
    }

    async function getDetails(id) {
      detailsResult.value = {};
      switch (searchType.value) {
        case "gene":
          detailsResult.value = await getGeneDetailsFromSearchResult(id);
          detailsResult.value.href =
            "https://hpo.jax.org/app/browse/gene/" + detailsResult.value.uid;
          break;
        case "cm":
          detailsResult.value = await getCardiomyopathyDetailsFromSearchResult(
            id
          );
          detailsResult.value.href =
            "https://hpo.jax.org/app/browse/term/" + detailsResult.value.id;
          break;
      }
    }

    return {
      cmTypes,
      cmDetails,
      selectedCMtype,
      getDetailsFromFirestore,
      searchTerm,
      searchType,
      search,
      geneResults,
      cmResults,
      getDetails,
      detailsResult,
    };
  },
};
</script>

<style scoped></style>
