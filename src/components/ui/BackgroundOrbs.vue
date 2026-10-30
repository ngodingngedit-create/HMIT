<template>
  <div class="background-orbs" aria-hidden="true">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>
</template>

<style scoped>
.background-orbs {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
}

/* design.md bagian 6.1: opasitas dan blur murni */
.orb-1 {
  top: -100px;
  left: -100px;
  width: 420px;
  height: 420px;
  background: rgba(3, 75, 147, 0.18);
}

.orb-2 {
  top: 40%;
  right: -120px;
  width: 380px;
  height: 380px;
  background: rgba(201, 0, 43, 0.12);
}

.orb-3 {
  bottom: -100px;
  left: 30%;
  width: 450px;
  height: 450px;
  background: rgba(24, 131, 255, 0.14);
}
</style>

