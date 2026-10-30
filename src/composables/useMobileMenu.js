import { ref } from 'vue'

// design.md bagian 9.2: composable menu HP.
// Tutup dengan Escape, kunci scroll saat terbuka.
export function useMobileMenu() {
  const isOpen = ref(false)

  const open = () => {
    isOpen.value = true
  }
  const close = () => {
    isOpen.value = false
  }
  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  return { isOpen, open, close, toggle }
}
