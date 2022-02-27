<template>
  <div class="message">
    <h1>Cardiomyopathy Data Sharing Platform</h1>
    <div class="hero">
      <p>
        Cardiomyopathy is a disease of the heart muscle that makes it harder for
        your heart to pump blood to the rest of your body. This platform allows
        the user to submit and keep track of their own data once they’ve
        registered to the website. The user can then view useful information
        relating to cardiomyopathies in varius ways such as graphs and plots for
        easier consumption and interpretation.
      </p>
    </div>
  </div>
  <div class="bothhearts">
    <img
      class="heart"
      alt="Cardiac"
      src="../../public/assets/CardianTransparent2.png"
    />
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
  setup() {
    const articles = ref([]);

    onMounted(async () => {
      articles.value = await getArticles();
    });

    return { articles };
  },
};
</script>

<style scoped>
.message {
  /* incase */
}

.hero {
  height: 15%;
  width: 75%;
  display: flex;
  justify-content: center;
  text-align: center;
}

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

.bothhearts {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 114px;
  float: right;
  z-index: -999999;
}

h1 {
  height: 15%;
  width: 75%;
  position: relative;
  text-decoration: underline;
  text-align: center;
}
</style>
