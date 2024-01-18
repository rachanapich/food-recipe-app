import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import { DefaultApolloClient } from "@vue/apollo-composable";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
});

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .provide(DefaultApolloClient, apolloClient)
  .mount("#app");
