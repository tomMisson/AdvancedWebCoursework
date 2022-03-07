<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="(art, index) in articles" :key="index">
        <CardItem
          :title="art.title"
          :image="art.image"
          :description="art.description"
          :url="art.url"
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
