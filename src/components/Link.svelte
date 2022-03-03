<script lang="ts">
  import ExternalLinkIcon from './icons/ExternalLinkIcon.svelte'
  import { classNames } from '../utils'

  export let className: string | undefined
  export let external = false
  export let href: string

  $: classes = classNames(
    'underline decoration-wavy decoration-indigo-400 underline-offset-[5px]',
    external && 'inline-flex items-center',
    className,
  )
  $: rel = external ? 'noopener noreferrer' : undefined
  $: target = external ? '_blank' : undefined
</script>

<a class={classes} {href} {rel} {target}>
  <slot />
  {#if external}
    <ExternalLinkIcon className="ml-0.5 opacity-80" />
  {/if}
</a>
