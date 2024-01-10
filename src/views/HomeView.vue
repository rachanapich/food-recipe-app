<template>
  <v-container >
    <div class="home">
    <h1>Food Recipe</h1>
  </div>
    <v-row   class="d-flex justify-center">
      <v-col cols="auto">
        <v-btn color="blue" rounded="m" variant="outlined">Create Recipe</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="blue" rounded="m">Explore Recipe</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <div></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  methods: {
    redirectToCreate() {
      // Add your logic to navigate to the create page
      console.log('Redirecting to create page');
    },
    redirectToView() {
      // Add your logic to navigate to the view page
      console.log('Redirecting to view page');
    },
  },
};
</script>
