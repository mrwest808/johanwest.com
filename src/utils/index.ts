export function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(' ')
}

export function isDarkMode() {
  return (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
}
