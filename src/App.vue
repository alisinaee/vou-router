<template>
  <div id="app" class="container">
    <h1 id="h1">Routing</h1>

    
    <br />

    <header-cmp></header-cmp>

    
    <br />

    <router-view ></router-view>
    <router-view name="info"></router-view>
  </div>
</template>

<script>
import header from './components/header'
export default {
  components:{
    'header-cmp' : header
  }
};
</script>


<style>
#h1 {
  text-align: center;
}
</style>
