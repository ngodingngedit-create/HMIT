<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['submit'])

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({})
const sent = ref(false)

// Validasi sisi klien (design.md 10.11): pesan galat menyebut masalah dan cara memperbaikinya
function validate() {
  errors.name = form.name.trim() ? '' : 'Nama wajib diisi.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ? ''
    : 'Isi alamat email yang valid, contoh: nama@email.com'
  errors.message = form.message.trim().length >= 10
    ? ''
    : 'Pesan terlalu pendek, tulis minimal 10 karakter.'
  return !errors.name && !errors.email && !errors.message
}

function onSubmit() {
  sent.value = false
  if (!validate()) return
  emit('submit', { ...form })
  sent.value = true
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <form class="contact-form" novalidate @submit.prevent="onSubmit">
    <div class="field">
      <label for="cf-name">Nama</label>
      <input id="cf-name" v-model="form.name" type="text" name="name" autocomplete="name" />
      <p v-if="errors.name" class="error" role="alert">{{ errors.name }}</p>
    </div>

    <div class="field">
      <label for="cf-email">Email</label>
      <input id="cf-email" v-model="form.email" type="email" name="email" autocomplete="email" />
      <p v-if="errors.email" class="error" role="alert">{{ errors.email }}</p>
    </div>

    <div class="field">
      <label for="cf-message">Pesan</label>
      <textarea id="cf-message" v-model="form.message" name="message" rows="5"></textarea>
      <p v-if="errors.message" class="error" role="alert">{{ errors.message }}</p>
    </div>

    <button type="submit" class="submit-btn">Kirim pesan</button>

    <p v-if="sent" class="success" role="status">
      Pesan terkirim. Kami akan membalas ke email Anda.
    </p>
  </form>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--ink);
}

input,
textarea {
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line);
  background: var(--bg);
  color: var(--ink);
  font-size: 0.95rem;
  transition: border-color 0.2s ease;
}

input:hover,
textarea:hover {
  border-color: rgba(3, 75, 147, 0.3);
}

input:focus,
textarea:focus {
  border-color: var(--blue-600);
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.error {
  color: var(--crimson-600);
  font-size: 0.85rem;
  margin: 0;
}

.success {
  color: #04680f;
  font-size: 0.9rem;
  margin: 0;
}

.submit-btn {
  align-self: flex-start;
  padding: 12px 28px;
  border: none;
  border-radius: var(--radius-pill);
  background: var(--blue-600);
  color: var(--color-white);
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-cta);
  transition: transform 160ms var(--ease-out), background-color 200ms var(--ease-out);
}

.submit-btn:hover {
  background: #023870;
}

.submit-btn:active {
  transform: scale(0.97);
}
</style>

