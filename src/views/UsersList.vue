<template>
  <div>
    <div class="users-list">
      <user-block v-for="user in users.users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import UserBlock from "@/components/UserBlock.vue";

export default {
  name: "UsersListView",
  components: {
    UserBlock,
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>
