<template>
  <div class="px-4 py-2 my-5 text-center" id="hero">
    <img
      class="d-block mx-auto mb-4"
      src="../../public/assets/CardianTransparent2.png"
      alt=""
      id="logo"
      height="150"
    />
    <h1 class="display-5 fw-bold" style="margin: auto">
      Cardiomyopathy Data <br />
      Sharing Platform
    </h1>
    <div class="col-lg-6 mx-auto my-3">
      <p class="lead mb-4">
        Cardiomyopathy is a disease of the heart muscle that makes it harder for
        your heart to pump blood to the rest of your body. This platform allows
        the user to submit and keep track of their own data once they’ve
        registered to the website. The user can then view useful information
        relating to cardiomyopathies in various ways such as graphs and plots
        for easier consumption and interpretation.
      </p>
    </div>
  </div>

  <CardsList :articles="articles" id="cardList" />
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

<style>
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
