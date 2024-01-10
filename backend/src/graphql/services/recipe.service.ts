import { PrismaClient } from "@prisma/client";
import { extractSelection } from "../utils/extractSelections";
import { GraphQLResolveInfo } from "graphql";

interface GetRecipesArgs {
  info: GraphQLResolveInfo;
}

interface GetRecipeArgs extends GetRecipesArgs {
  id: string;
  name: string;
}

interface RecipeInput {
  name: string;
  ingredients: string[];
  instructions: string;
  imageUrl: string;
}

const prisma = new PrismaClient();

export const getRecipes = async ({ info }: GetRecipesArgs) => {
  const extractedSelections = extractSelection(info);

  return await prisma.recipe.findMany();
};

export const getRecipe = async ({ id, info }: GetRecipeArgs) => {
  const extractedSelections = extractSelection(info);

  return await prisma.recipe.findUnique({ where: { id } });
};

export const createRecipe = async ({
  name,
  ingredients,
  instructions,
  imageUrl,
}: RecipeInput) => {
  const createdRecipe = await prisma.recipe.create({
    data: {
      name,
      ingredients,
      instructions,
      imageUrl,
    },
  });

  return createdRecipe;
};

export const updateRecipe = async ({
  id,
  name,
  ingredients,
  instructions,
  imageUrl,
}: RecipeInput & { id: string }) => {
  console.log(id, name, ingredients, instructions, imageUrl);
  const updatedRecipe = await prisma.recipe.update({
    where: { id },
    data: {
      name,
      ingredients,
      instructions,
      imageUrl,
    },
  });

  return updatedRecipe;
};

export const deleteRecipe = async ({ id }: { id: string }) => {
  const deletedRecipe = await prisma.recipe.delete({
    where: { id },
  });

  return deletedRecipe;
};
