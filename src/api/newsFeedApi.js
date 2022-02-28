export const getArticles = () => {
    if(localStorage.getItem('articles') == null || document.location.href.includes("cache=bust")){
        return fetch('https://gnews.io/api/v4/search?q=cardiomyopathy&token=2feb18fe5cd871f5dff92cc15e2b1417&max=3')
        .then((response) => response.json())
        .then((json) => {
            localStorage.setItem('articles', JSON.stringify(json?.articles))
            return json?.articles;
        })
        .catch(err => console.error(err))
    }
    else{
        return JSON.parse(localStorage.getItem('articles'));
    }
}