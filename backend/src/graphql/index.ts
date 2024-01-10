import { readFileSync } from "fs";
import path from "path";
import { recipesResolver } from "./resolvers/recipe.resolver";

const recipeTypes = readFileSync(
  path.join(__dirname, "./typeDefs/recipe.graphql"),
  {
    encoding: "utf-8",
  }
);

export const typeDefs = `
   
    ${recipeTypes}
`;

export const resolvers = {
  Query: {
    ...recipesResolver.Query,
  },
  Mutation: {
    ...recipesResolver.Mutation,
  },
};
