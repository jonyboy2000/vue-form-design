<template>
  <div class="row" :style="{'flex': rowConfig}"
  ></div>
</template>

<script>
export default {
  props: {
    rowConfig: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {}
  },
  methods: {
    rowDrop(e) {

    }
  }
}
</script>

<style scoped>
  .row{
    border: 1px solid #ccc;
    height: 100%;
  }
</style>


