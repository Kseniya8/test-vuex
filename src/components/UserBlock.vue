<template>
  <div class="user-block" @click="detailedUser">
    <div class="user-block__img">
      <img
        src="https://i10.fotocdn.net/s118/64eaf4d89872c45a/user_l/2698648794.jpg"
        :alt="user.username"
      />
    </div>
    <div class="user-block__info">
      <h2>
        {{ user.username }}
      </h2>
      <span> {{ user.name }} ({{ user.address.city }} city) </span>
      <span>
        {{ user.company.name }}
      </span>
      <span>
        {{ user.website }}
      </span>
      <span> {{ user.phone }} - {{ user.email }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-block",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    detailedUser() {
      this.$router.push({ name: "details", params: { id: this.user.id } });
    },
  },
};
</script>
