<template>
  <div class="card">
    <a :href="url" target="_blank">
      <img
        v-if="image"
        class="card-img-top"
        :src="image"
        alt="Card image cap"
      />
    </a>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "image", "description", "url"],
};
</script>

<style>
.card-text {
  text-overflow: ellipsis;
  overflow: hidden;
  height: 70px;
}
.card-title {
  text-overflow: ellipsis;
  overflow: hidden;
  height: 75px;
}

img {
  height: 200px;
}

@media (max-width: 768px) {
  img {
    height: 350px;
  }
}
</style>
