<script lang="ts">
  import { onMount } from 'svelte'
  import { cubicOut } from 'svelte/easing'
  import { fade } from 'svelte/transition'
  import { isDarkMode } from '../utils'
  import DarkModeIcon from './icons/DarkModeIcon.svelte'
  import LightModeIcon from './icons/LightModeIcon.svelte'

  export let className: string | undefined

  let theme: 'light' | 'dark' | 'undetermined' = 'undetermined'

  function updateDarkMode() {
    if (isDarkMode()) {
      theme = 'dark'
      document.documentElement.classList.add('dark')
    } else {
      theme = 'light'
      document.documentElement.classList.remove('dark')
    }
  }

  onMount(() => {
    theme = isDarkMode() ? 'dark' : 'light'
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', updateDarkMode)
    } else {
      mediaQuery.addListener(updateDarkMode)
    }

    ;(window as any).__systemTheme = () => {
      localStorage.removeItem('theme')
    }

    return () => {
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener('change', updateDarkMode)
      } else {
        mediaQuery.removeListener(updateDarkMode)
      }
    }
  })

  function toggleTheme() {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
    updateDarkMode()
  }
</script>

{#if theme !== 'undetermined'}
  <button
    in:fade={{ duration: 200, easing: cubicOut }}
    class={className}
    on:click={toggleTheme}
    title={theme === 'light' ? 'Enable dark mode' : 'Enable light mode'}
  >
    {#if theme === 'light'}
      <DarkModeIcon className="w-5 h-5" />
    {:else}
      <LightModeIcon className="w-5 h-5" />
    {/if}
  </button>
{:else}
  <div class={classes}>
    <div class="w-5 h-5" />
  </div>
{/if}
