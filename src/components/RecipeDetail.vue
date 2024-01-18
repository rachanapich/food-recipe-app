<template>
  <v-container class="fill-height background-image" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" align="center">
          <div v-if="recipe">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card width="700px" height="500px" color="rgb(96,125,139,0.4)">
                    <v-img :src="recipe.imageUrl" height="300px" class="mt-4"></v-img>
                    <v-card-title class="font-weight-black ">{{ recipe.name }}</v-card-title>
                    <v-card-text >
                      <p >
                        <span class="font-weight-bold">Instructions:</span>
                         {{ recipe.instructions }}
                      </p>
                      <p >
                        <span class="font-weight-bold">Ingredients:</span>
                         {{ recipe.ingredients }}
                      </p>
                    </v-card-text>
                    <v-btn @click="goToHomePage" color="primary" class="mt-3">Go to Home</v-btn>
                  </v-card>
                </v-col>
                
              </v-row>
            </v-container>
            
          </div>
          <div v-else>
            <p>Loading...</p>
          </div>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import { computed, watchEffect } from "vue";
import gql from "graphql-tag";
import { useRoute, useRouter } from "vue-router"; // Import useRoute from vue-router

const RECIPE_QUERY = gql`
  query Recipe($recipeId: String!) {
    recipe(id: $recipeId) {
      name
      ingredients
      instructions
      imageUrl
    }
  }
`;

export default {
  setup() {
    const route = useRoute(); // Access route information
    const router = useRouter(); // Access router information
    const recipeId = computed(() => route.params.recipeId); // Get recipeId from route params

    const { result } = useQuery(RECIPE_QUERY, {
      recipeId: recipeId, // Pass the recipeId value to the query
    });
    const recipe = computed(() => result.value?.recipe ?? []);

    watchEffect(() => {
      console.log(result.value);
    });

    const goToHomePage = () => {
      router.push({ path: "/" }); // Redirect to the home page
    };

    return {
      recipe,
      goToHomePage,
    };
  },
};
</script>

<style scoped>
.background-image {
  background: url('../assets/recipe-detail-bg.jpg') center center;
  background-size: cover;
}
</style>
