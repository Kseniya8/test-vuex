<template>
  <div class="specific-user-block">
    <div class="specific-user-block__img">
      <img
        src="https://i10.fotocdn.net/s118/64eaf4d89872c45a/user_l/2698648794.jpg"
        :alt="user.username"
      />
    </div>
    <div class="specific-user-block__info">
      <h2>User</h2>
      <p>Username: {{ user.username }}</p>
      <p>Name: {{ user.name }}</p>
      <p>Website: {{ user.website }}</p>
      <p>Phone: {{ user.phone }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
    <div class="specific-user-block__info">
      <h2>Address</h2>
      <p>
        {{ user.address.suite }}, {{ user.address.street }} street
        {{ user.address.city }} city
      </p>
      <p>Zipcode: {{ user.address.city }}</p>
      <p>
        Location: lat {{ user.address.geo.lat }} lng {{ user.address.geo.lat }}
      </p>
    </div>
    <div class="specific-user-block__info">
      <h2>Company</h2>
      <p>Name: {{ user.company.name }}</p>
      <p>Catch phrase: {{ user.company.catchPhrase }}</p>
      <p>Specialization: {{ user.company.bs }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecificUserView",
  components: {},
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      const { id } = this.$route.params;
      if (id) {
        const { data } = await this.$store.dispatch("fetchSpecificUser", id);
        this.user = data;
      }
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
