import { GraphQLResolveInfo } from "graphql";
import {
  createRecipe,
  getRecipe,
  getRecipes,
  updateRecipe,
  deleteRecipe,
} from "../services/recipe.service";

export const recipesResolver = {
  Query: {
    async recipes(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await getRecipes({ info });
    },
    async recipe(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await getRecipe({ id: args.id, name: args.name, info });
    },
  },
  Mutation: {
    async createRecipe(_: any, { input }: Record<string, any>) {
      return await createRecipe({
        name: input.name,
        ingredients: input.ingredients,
        instructions: input.instructions,
        imageUrl: input.imageUrl,
      });
    },
    async updateRecipe(_: any, args: Record<string, any>) {
      return await updateRecipe({
        id: args.id,
        ...args.input,
      });
    },
    async deleteRecipe(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await deleteRecipe({ id: args.id });
    },
  },
};
