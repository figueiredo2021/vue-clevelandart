<script setup lang="ts">
import { ref } from 'vue';
import useMuseum from '../composables/useMuseum';
import ResultList from './ResultList.vue';

const { results, loading, error, search } = useMuseum();
const query = ref('');

function onInputChange() {
  if (!query.value) {
    results.value = [];
  }
}

function searchMetMuseum() {
  search(query.value);
}
</script>
<template>
  <div class="flex flex-col m-auto w-4/5 mb-2 border-b-2 pb-2 border-gray-900">
    <div>Search for a paiting by entering a keyword below.</div>
    <div class="text-center">
      <input
        v-model="query"
        @input="onInputChange"
        data-test="search-input"
        class="border-gray-800 border-2 rounded-l-lg p-2 w-2/3"
      />
      <button
        @click="searchMetMuseum"
        data-test="search-button"
        class="border-gray-800 border-2 border-l-0 bg-cyan-800 text-white p-2 rounded-r-lg"
      >
        Search
      </button>
    </div>
  </div>
  <div class="w-4/5 m-auto">
    <div v-if="loading" data-test="loading">Loading...</div>
    <div v-if="error" data-test="error">{{ error }}</div>

    <div v-if="!loading && results.length" data-test="results">
      <ResultList :objects="results" />
    </div>
  </div>
</template>
