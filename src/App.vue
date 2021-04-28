<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 現在 App.vue 已經不需要執行這一段
  // created() {
  //   const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`; // 'https://vue-course-api.hexschool.io/api/geehsu/products';
  //   // API 伺服器路徑
  //   // 所申請的 API Path
  //   console.log(process.env.APIPATH, process.env.CUSTOMPATH);
  //   this.$http.get(api).then((response) => {
  //     console.log(response.data)
  //   });
  // },
}
</script>

<style lang="scss">
@import "./assets/all";
</style>
