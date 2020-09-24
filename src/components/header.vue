<template>
  <div>
    <ul class="nav nav-tabs">
      <router-link to="/" v-slot="{href , navigate , isExactActive}">
        <li role="presentation" :class="{active :isExactActive}">
          <a :href="href" @click="navigate">Home</a>
        </li>
      </router-link>

      <router-link to="/user" v-slot="{ isActive ,href , navigate}">
        <li role="presentation" :class="{active :isActive}">
          <a :href="href" @click="navigate">User</a>
        </li>
      </router-link>

      <router-link to="/about" v-slot="{ isActive ,href , navigate}">
        <li role="presentation" :class="{active :isActive}">
          <a :href="href" @click="navigate">About</a>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
};
</script>