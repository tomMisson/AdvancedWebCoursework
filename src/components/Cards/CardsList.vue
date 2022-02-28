<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-4 col-md-6 col-sm-12"
        v-for="(art, index) in articles"
        :key="index"
      >
        <CardItem
          :title="art.title"
          :image="art.image"
          :description="art.description"
          :url="art.url"
          class="my-2"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CardItem from "./CardItem.vue";
export default {
  name: "CardsList",
  props: ["articles"],
  components: {
    CardItem,
  },
};
</script>
<style></style>
