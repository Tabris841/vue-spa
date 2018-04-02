<template>
  <nav class="navbar has-shadow is-primary">
    <div class="container">
      <router-link class="navbar-brand" to="/category/front-end" exact>
        <img src="http://bit.ly/vue-img"
             alt="Vue SPA"/>
      </router-link>
      <div class="navbar-start">
        <router-link class="navbar-item is-tab"
                     to="/category/front-end">Front-end
        </router-link>
        <router-link class="navbar-item is-tab"
                     :to="{ name: 'category', params: { id: 'mobile' } }">Mobile
        </router-link>
        <router-link class="navbar-item is-tab" to="/login">
          <span v-if="isAuthenticated">Logout</span><span v-else>Login</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['isAuthenticated'])
    }
  };
</script>

