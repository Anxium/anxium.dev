<script lang="ts">
	import Prism from 'prismjs';
	import '../prism-theme.css';

	/**
	 * Full name of the person
	 */
	export let fullName: string;
	/**
	 * Age of the person
	 */
	export let age: number;
	/**
	 * Location of the person
	 */
	export let location: string;
	/**
	 * Job title of the person
	 */
	export let title: string;
	/**
	 * Company the person works for
	 */
	export let company: string;

	const language = 'js';
	const code = `new Me({
	name: "${fullName}",
	age: ${age},
	location: "${location}",
	title: "${title}",
	company: "${company}",
	fastLearner: true
})`;
</script>

<div
	class="relative overflow-hidden shadow-xl flex bg-zinc-900/70 sm:rounded-xl backdrop-blur ring-1 ring-inset ring-white/10"
>
	<div class="relative w-full flex flex-col">
		<div class="flex-none border-b border-zinc-500/30">
			<div class="flex items-center h-8 space-x-1.5 px-3">
				<div class="w-2.5 h-2.5 bg-macos-red rounded-full"></div>
				<div class="w-2.5 h-2.5 bg-macos-yellow rounded-full"></div>
				<div class="w-2.5 h-2.5 bg-macos-green rounded-full"></div>
			</div>
		</div>

		<div class="relative min-h-0 flex-auto flex flex-col">
			<div class="w-full flex-auto flex min-h-0 overflow-auto">
				<div class="w-full relative flex-auto">
					<pre class="flex min-h-full text-sm leading-[21px]">
						<div
							aria-hidden="true"
							class="hidden md:block text-zinc-600 flex-none py-4 pr-4 text-right select-none"
							style="width:50px">{Array.from({ length: 13 }, (_, i) => i + 1).join('\n')}
						</div>

	
  <code
							class="flex-auto relative block text-zinc-50 pt-4 pb-4 pr-4 pl-4 md:pl-2 overflow-auto code-block"
							>{@html Prism.highlight(code, Prism.languages[language], language)}</code
						>
          </pre>
				</div>
			</div>
		</div>
	</div>
</div>
