import App from './App.svelte';

// get pokemon on load and set loading to false when retrieved
let loading = true;

const app = new App({
  target: document.body,
  props: {
    loading,
  },
});

export default app;
