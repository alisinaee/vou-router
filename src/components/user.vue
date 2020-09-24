<template>
  <div>
    <h2>this is user page</h2>
    <br />
    <!--<router-link to="/" tag="button" class="btn btn-primary">back Home</router-link> -->
    <button class="btn btn-primary" @click="back">back Home</button>

    <br />
    <br />
    <br />

    <router-view></router-view>

    
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      //data: this.$route.params.data,
    };
  },
  
  watch: {
      //add this func to update url params when component did no update!
      /* $route : function () {
          this.data = this.$route.params.data
          console.log(this.data);
      } */
      

  },
  methods: {
    back() {
      console.log(this.$route);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>