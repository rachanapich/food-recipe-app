<template>
  <v-container class="fill-height bg-blue-lighten-5" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" align="center">
        <v-card width="800" height="660" class="text-center "  >
          <div align="center">
            <div class="d-flex flex-row justify-center mt-2" >
              <v-sheet>
                <h2 class="flex-1-0 text-light-blue-darken-4">Share us your amazing recipes</h2>
              </v-sheet>
              <v-sheet>
                <v-img src="../assets/recipe-icon.png" width="40" height="40"></v-img>
              </v-sheet>
            </div>
            <v-card width="780" height="600" flat class="mt-4" >
              <form @submit.prevent="createNewRecipe" >
              <v-text-field v-model="formData.name" label="Name"></v-text-field>
              <v-textarea
                v-model="formData.instructions"
                label="Instructions"
              ></v-textarea>
              <v-textarea
                v-model="formData.ingredients"
                label="Ingredients (Separate with commas)"
              ></v-textarea>
              <v-text-field
                v-model="formData.imageUrl"
                label="Image URL"
              ></v-text-field>
              <v-container >
                <v-row class="d-flex justify-space-between mt-4">
                  <v-col>
                    <v-btn @click="goToHomePage" variant="outlined" color="primary">Go to Home</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn type="submit" color="primary">Create Recipe</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </form>
            </v-card>
          </div>       
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import { ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRouter } from "vue-router"; // Import useRouter from vue-router

const CREATE_RECIPE_MUTATION = gql`
  mutation CreateRecipe($input: RecipeInput!) {
    createRecipe(input: $input) {
      name
      instructions
      ingredients
      imageUrl
    }
  }
`;

export default {
  setup() {
    const router = useRouter(); // Access router object
    const { mutate } = useMutation(CREATE_RECIPE_MUTATION);
    const formData = ref({
      name: "",
      instructions: "",
      ingredients: "",
      imageUrl: "",
    });

    const createNewRecipe = async () => {
      const ingredientsArray = formData.value.ingredients
        .split(",")
        .map((item) => item.trim());

      const input = {
        name: formData.value.name,
        instructions: formData.value.instructions,
        ingredients: ingredientsArray,
        imageUrl: formData.value.imageUrl,
      };

      await mutate({ input });
      goToHomePage();
    };

    const goToHomePage = () => {
      router.push({ path: "/" });
    };

    return {
      formData,
      createNewRecipe,
      goToHomePage,
    };
  },
};
</script>