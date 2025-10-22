<script setup>
import { RouterView, useRoute } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue";
import LoginLayout from "./layouts/LoginLayout.vue";

const route = useRoute();
</script>

<template>
  <div>
    <LoginLayout v-if="route.meta.layout === 'login'">
      <RouterView />
    </LoginLayout>
    <MainLayout v-else>
      <RouterView />
    </MainLayout>
  </div>
</template>
