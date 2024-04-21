<script>
	import { Me } from '../utils/me';
	import CodeBlock from './+code-block.svelte';
	const me = new Me();
</script>

<div
	class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 my-20 sm:my-24 lg:my-32 lg:grid lg:gap-8 lg:grid-cols-12 lg:items-center"
>
	<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:col-span-5">
		<!-- <img
			class="h-11"
			src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
			alt="Your Company"
		/> -->

		<div class="">
			<a href="#" class="inline-flex space-x-6">
				<span
					class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20"
					>What's new</span
				>
				<span
					class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300"
				>
					<span>Just shipped v1.0</span>
					<svg
						class="h-5 w-5 text-gray-500"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
			</a>
		</div>

		<h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Hey, I'm Axel!</h1>
		<p class="mt-6 text-lg leading-8 text-gray-300">
			I'm a <span class="italic">Technical lead developer</span> currently working at
			<a href="https://weinvest.be">We Invest Real Estate</a>.
		</p>
	</div>

	<div class="mt-8 lg:mt-0 lg:col-start-7 lg:col-span-6">
		<div class="mx-auto max-w-2xl lg:max-w-xl lg:mx-0">
			<CodeBlock
				age={me.age}
				company={me.company}
				fullName={me.fullName}
				location={me.location}
				title={me.title}
			/>
		</div>
	</div>
</div>
