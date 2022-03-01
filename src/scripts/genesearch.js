export function searchForGenes(searchTerm){
    return fetch(`https://hpo.jax.org/api/hpo/search?q=${searchTerm}`)
    .then(res => res.json())
    .then(res => res.genes)
    .catch(err => console.error(err))
}

export function searchForCardioMyopathies(searchTerm){
    return fetch(`https://hpo.jax.org/api/hpo/search?q=${searchTerm}`)
    .then(res => res.json())
    .then(res => res.terms)
    .catch(err => console.error(err))
}

export function getGeneDetailsFromSearchResult(geneId){
    return fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&id=${geneId}&retmode=json`)
    .then(res => res.json())
    .then(res => res.result[geneId])
    .catch(err => console.error(err))
}

export function getCardiomyopathyDetailsFromSearchResult(termID){
    return fetch(`https://hpo.jax.org/api/hpo/term/${termID}`)
    .then(res => res.json())
    .then(res => res.details)
    .catch(err => console.error(err))
}