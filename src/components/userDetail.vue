<template>
  <div>
    <h3>this is user => detail page</h3>
    <br>
    <br>
    <p> {{$route.params.id}}</p>

    <br>
    <br>

    <router-link tag="button" class="btn btn-primary" :to="{name : 'userEdit', params : {id :$route.params.id}}" > edit user</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>