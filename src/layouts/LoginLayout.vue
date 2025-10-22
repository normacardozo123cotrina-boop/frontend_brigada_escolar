<template>
  <div class="login-layout">
    <div class="login-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.login-layout {
  display: flex;
  justify-content: center; /*centra horizontalmente */
  align-items: center;     /*centra verticalmente */
  height: 100vh;           /*ocupa toda la altura de la ventana */
  width: 100%;
  padding: 20px;           
  background-color: none;
}

.login-content {
  width: 100%;
  max-width: 420px; 
}
</style>
