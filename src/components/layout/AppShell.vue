<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div
    class="min-h-screen flex flex-col gap-8 px-6 pb-12 transition-colors duration-300 md:px-10 lg:px-12 overflow-hidden"
  >
    <header
      class="flex flex-col gap-6 rounded-card border border-border bg-surface px-6 py-6 shadow-shell transition-colors duration-300 dark:border-border-dark dark:bg-surface-dark md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h1
          class="text-3xl font-semibold uppercase tracking-[0.18em] text-primary transition-colors duration-300 dark:text-text-inverted"
        >
          SESAL
        </h1>
      </div>
    </header>

    <main class="flex flex-1 flex-col gap-6 min-w-0">
      <slot />
    </main>

    <!-- Footer con logos institucionales -->
    <footer class="mt-12 border-t border-border bg-surface/50 px-6 py-8 transition-colors duration-300 dark:border-border-dark dark:bg-surface-dark/50">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
          <!-- Logo SESAL -->
          <div class="flex flex-col items-center gap-2">
            <img
              src="/Logo_de_SESAL.svg.png"
              alt="Secretaría de Salud - SESAL"
              class="h-16 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
            />
            <p class="text-xs text-text-secondary transition-colors duration-300 dark:text-text-muted">
              Secretaría de Salud
            </p>
          </div>

          <!-- Logo UNFPA -->
          <div class="flex flex-col items-center gap-2">
            <img
              src="/logo-unfpa-blue.png"
              alt="Fondo de Población de las Naciones Unidas - UNFPA"
              class="h-16 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
            />
            <p class="text-xs text-text-secondary transition-colors duration-300 dark:text-text-muted">
              UNFPA Honduras
            </p>
          </div>
        </div>

        <!-- Texto de copyright -->
        <div class="mt-6 text-center">
          <p class="text-xs text-text-secondary transition-colors duration-300 dark:text-text-muted">
            © {{ currentYear }} - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
