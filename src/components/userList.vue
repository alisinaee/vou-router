<template>
  <div>
    <h3>this is user => list page</h3>
    <br />
    <div class="list-group">
      <router-link tag="a" 
      @click.prevent=""
        class="list-group-item list-group-item-action"
        v-for="(item , index) in userList"
        :key="index"
        :to="{name: 'userDetail' , params : {id :item.id}}"
      >{{ item.name }} -- {{ item.email }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      userList: [
        { id :1 , name: "ali", email: "test@test.com" },
        {  id :2 ,name: "mamad", email: "mamad@mmd.com" },
        {  id :3 ,name: "sepi", email: "khalse@sepi.com" },
      ],
    };
  },
};
</script>

<style scoped>
</style>