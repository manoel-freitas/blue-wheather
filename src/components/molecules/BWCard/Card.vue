<template>
  <article class="card">
    <header v-if="$slots.header" class="card__header">
      <slot name="header" />
      <hr />
    </header>
    <section class="card__body">
      <slot name="body" />
    </section>
    <footer v-if="$slots.footer" class="card__footer">
      <hr />
      <slot name="footer" />
    </footer>
  </article>
</template>
