<script lang="ts">
	import Prism from 'prismjs';
	import '../prism-theme.css';
	import { Me } from '../utils/me';

	const me = new Me();
	let language = 'js';
	let code = `new Me({
	name: "${me.fullName}",
	age: ${me.age},
	location: "${me.location}",
	title: "${me.title}",
	company: "${me.company}",
	fastLearner: true
})`;
</script>

<div
	class="relative overflow-hidden shadow-xl flex bg-slate-900/70 sm:rounded-xl backdrop-blur ring-1 ring-inset ring-white/10"
>
	<div class="relative w-full flex flex-col">
		<div class="flex-none border-b border-slate-500/30">
			<div class="flex items-center h-8 space-x-1.5 px-3">
				<div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
				<div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
				<div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
			</div>
		</div>

		<div class="relative min-h-0 flex-auto flex flex-col">
			<div class="w-full flex-auto flex min-h-0 overflow-auto">
				<div class="w-full relative flex-auto">
					<pre class="flex min-h-full text-sm leading-[21px]"><div
							aria-hidden="true"
							class="hidden md:block text-slate-600 flex-none py-4 pr-4 text-right select-none"
							style="width:50px">1
  2
  3
  4
  5
  6
  7
  8
  9
  10
  11
  12
  13
  </div>
	
  <code class="flex-auto relative block text-slate-50 pt-4 pb-4 px-4 overflow-auto code-block"
							>{@html Prism.highlight(code, Prism.languages[language], language)}</code
						>
          </pre>
				</div>
			</div>
		</div>
	</div>
</div>
