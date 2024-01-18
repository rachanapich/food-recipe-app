<template>
  <v-container class="fill-height background-image" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" align="center">
        <v-card width="700" height="500" class="text-center bg-blue-lighten-5">
          <v-card-text class="align-center text-light-blue-darken-4">
            <h1>Welcome to your world of Recipes</h1>
          </v-card-text>
          <v-row>
            <v-img
              src="../assets/cooking-icon1.png"
              width="200"
              height="200"
            ></v-img>
          </v-row>
          <v-row class="d-flex justify-space-between mt-4">
            <v-col>
              <v-btn
                @click="goToViewRecipesPage"
                rounded="lg"
                size="large"
                variant="outlined"
                color="blue"
                >View Recipes</v-btn
              >
            </v-col>
            <v-col>
              <v-btn
                @click="goToCreateRecipePage"
                rounded="lg"
                size="large"
                elevated
                color="blue"
                >Create Recipe</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  methods: {
    goToCreateRecipePage() {
      // Redirect to the createRecipe route
      this.$router.push({ name: "createRecipe" });
    },
    goToViewRecipesPage() {
      // Redirect to the recipes route
      this.$router.push({ name: "recipes" });
    },
  },
});
</script>

<style scoped>
.fill-height {
  height: 100%;
}

.text-center {
  text-align: center;
}

.background-image {
  background: url("../assets/bgimage1.jpg") center center;
  background-size: cover;
}

.align-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Center the v-card contents both vertically and horizontally */
.v-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
