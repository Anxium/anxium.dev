<script>
  import { injectSpeedInsights } from '@vercel/speed-insights';
  import '../app.css';

  injectSpeedInsights();
</script>

<slot />