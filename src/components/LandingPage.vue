<template >
  <div  class="landing-page">
    <v-container  fluid>
      <v-row align="center" justify="center">
        <v-col v-for="(recipe, index) in recipes" :key="index" cols="12" sm="8" align="center">
          <v-card width="700" class="bg-blue-lighten-5">
            <v-img :src="recipe.imageUrl" height="200px" class="mt-3"></v-img>
            <v-card-title>{{ recipe.name }}</v-card-title>
            <v-card-text>
              <p><strong>Instructions:</strong> {{ recipe.instructions }}</p>
              <p><strong>Ingredients:</strong> {{ recipe.ingredients }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="viewRecipe(recipe)" color="primary" variant="outlined">View</v-btn>
              <v-btn @click="deleteRecipe(recipe.id)" color="red" variant="tonal">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useQuery, useMutation } from "@vue/apollo-composable";
import { watchEffect, computed } from "vue";
import gql from "graphql-tag";
import { useRouter } from "vue-router";

const ALL_RECIPES_QUERY = gql`
  query Recipes {
    recipes {
      id
      name
      ingredients
      instructions
      imageUrl
    }
  }
`;

const DELETE_RECIPE_MUTATION = gql`
  mutation DeleteRecipe($deleteRecipeId: String!) {
    deleteRecipe(id: $deleteRecipeId) {
      id
    }
  }
`;

export default {
  setup() {
    const { result } = useQuery(ALL_RECIPES_QUERY);
    const recipes = computed(() => result.value?.recipes ?? []);

    const router = useRouter();

    const { mutate } = useMutation(DELETE_RECIPE_MUTATION);

    watchEffect(() => {
      console.log(result);
    });

    const viewRecipe = (recipe) => {
      console.log("Viewing recipe:", recipe);
      // Assuming `recipe` object has an `id` property
      if (recipe.id) {
        router.push({ name: "recipeDetail", params: { recipeId: recipe.id } });
      }
    };

    const deleteRecipe = async (recipeId) => {
      try {
        await mutate({ deleteRecipeId: recipeId });
        console.log("Recipe deleted successfully!");
        window.location.reload();
        // Add logic to update UI or perform additional actions after deletion
      } catch (error) {
        console.error("Error deleting recipe:", error);
        // Handle error (e.g., show error message)
      }
    };

    const goToCreateRecipePage = () => {
      console.log("Navigating to createRecipe page");
      router.push({ name: "createRecipe" });
    };

    return {
      recipes,
      viewRecipe,
      deleteRecipe,
      goToCreateRecipePage,
    };
  },
};
</script>

<style scoped>
.landing-page {
  background: url('../assets/bgimage1.jpg') center center;
  background-size: cover;
  height: 100vh; /* Set the height to cover the entire viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Additional styles for your content if needed */
.background-image {
  background: url('../assets/bgimage1.jpg') center center;
  background-size: cover;
}
</style>
