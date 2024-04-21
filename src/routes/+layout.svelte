<script>
	import { inject as injectVercelAnalytics } from '@vercel/analytics';
	import { injectSpeedInsights as injectVercelSpeedInsights } from '@vercel/speed-insights';

	import '../css/app.css';

	injectVercelAnalytics();
	injectVercelSpeedInsights();
</script>

<slot />
