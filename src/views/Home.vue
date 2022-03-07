<template>
  <div class="container">
    <div class="hero">
      <h1>Cardiomyopathy Data Sharing Platform</h1>
      <p>
        Cardiomyopathy is a disease of the heart muscle that makes it harder for
        your heart to pump blood to the rest of your body. This platform allows
        the user to submit and keep track of their own data once they’ve
        registered to the website. The user can then view useful information
        relating to cardiomyopathies in varius ways such as graphs and plots for
        easier consumption and interpretation.
      </p>
    </div>
    <img class="heart" alt="Cardiac" src="../../public/assets/CardianTransparent2.png" />
    <img
      class="heartsmall"
      alt="Cardiac"
      src="../../public/assets/CardianTransparent2.png"
    />
  </div>
  <CardsList :articles="articles" />
</template>

<script>
import CardsList from "@/components/Cards/CardsList.vue";
import { getArticles } from "../api/newsFeedApi";
import { ref, onMounted } from "vue";

export default {
  name: "Home",
  components: {
    CardsList,
  },
  setup(){
    const articles = ref([]);

    onMounted(async() => {
      articles.value = await getArticles();
    })

    return {articles}
  }
};
</script>

<style>
.heart {
  position: relative;
  top: -47px;
  right: 0px;
  float: right;
  height: 20%;
  width: 19%;
  transform: scaleX(-1);
}

.heartsmall {
  position: relative;
  top: -47px;
  right: -50px;
  float: right;
  height: 10%;
  width: 10%;
}

.cardiomessage {
  height: 15%;
  width: 75%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
}
</style>
