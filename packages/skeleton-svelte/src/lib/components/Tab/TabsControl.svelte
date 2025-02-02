<script lang="ts">
	import type { TabsControlProps } from './types.js';

	let {
		id,
		name,
		group = $bindable(),
		title,
		// A11y
		label = '',
		controls = '',
		// Root
		base = 'group',
		width = '',
		active = 'text-surface-950-50 border-surface-950-50',
		inactive = 'text-surface-600-400 border-transparent',
		flex = 'flex justify-center items-center',
		background = '',
		border = 'border-b',
		text = 'type-scale-3',
		padding = 'pb-2',
		rounded = '',
		gap = 'gap-1',
		cursor = 'cursor-pointer',
		classes = '',
		// Content
		contentBase = 'w-full',
		contentFlex = 'flex justify-center items-center',
		contentGap = 'gap-2',
		contentBg = 'group-hover:preset-tonal-primary',
		contentPadding = 'p-2 px-4',
		contentRounded = 'rounded-container',
		contentClasses = '',
		// Events
		onclick = () => {},
		onkeypress = () => {},
		onkeydown = () => {},
		onkeyup = () => {},
		onchange = () => {},
		// Snippets
		children
	}: TabsControlProps = $props();

	const selected = $derived(group === name);
	const rxActive = $derived(selected ? active : inactive);

	let elemInput: HTMLInputElement;

	function onKeyDownHandler(event: KeyboardEvent) {
		// Fire Event Handler
		onkeydown(event);

		// If select key events
		if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.code)) return;

		// Prevent default behavior
		event.preventDefault();

		// Find the closest tab/tablelist
		const currTab = elemInput.closest('[role="tab"]');
		if (!currTab) return;
		const tabList = elemInput.closest('[role="tablist"]');
		if (!tabList) return;

		// Get RTL mode
		const isRTL = getComputedStyle(tabList).direction === 'rtl';
		// Get list of tab elements
		const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
		// Get a reference to the current tab
		const currIndex = tabs.indexOf(currTab);

		// Determine the index of the next tab
		let nextIndex = -1;
		switch (event.code) {
			case 'ArrowRight':
				if (isRTL) {
					nextIndex = currIndex - 1 < 0 ? tabs.length - 1 : currIndex - 1;
					break;
				}
				nextIndex = currIndex + 1 >= tabs.length ? 0 : currIndex + 1;
				break;
			case 'ArrowLeft':
				if (isRTL) {
					nextIndex = currIndex + 1 >= tabs.length ? 0 : currIndex + 1;
					break;
				}
				nextIndex = currIndex - 1 < 0 ? tabs.length - 1 : currIndex - 1;
				break;
			case 'Home':
				nextIndex = 0;
				break;
			case 'End':
				nextIndex = tabs.length - 1;
				break;
		}
		if (nextIndex < 0) return;

		// Set Active Tab
		const nextTab = tabs![nextIndex!];
		const nextTabInput = nextTab?.querySelector('input');
		if (nextTabInput) {
			nextTabInput.click();
			(nextTab as HTMLDivElement).focus();
		}
	}
</script>

<!-- @component A Tab Control component. -->

<label
	{id}
	class="{base} {width} {rxActive} {flex} {background} {border} {text} {padding} {rounded} {gap} {cursor} {classes}"
	aria-label={label}
	{title}
>
	<!-- NOTE: do not add additional classes to this <div> -->
	<div
		class="size-full"
		role="tab"
		aria-controls={controls}
		aria-selected={selected}
		data-testid="tabs-control"
		tabindex={selected ? 0 : -1}
		onkeydown={onKeyDownHandler}
		{onkeypress}
		{onkeyup}
	>
		<!-- Keep these classes on wrapping element -->
		<div class="h-0 w-0 flex-none overflow-hidden">
			<input bind:group bind:this={elemInput} type="radio" {name} value={name} onchange={() => onchange(group)} {onclick} tabindex="-1" />
		</div>
		<!-- Content -->
		{#if children}
			<div class="{contentBase} {contentFlex} {contentGap} {contentBg} {contentPadding} {contentRounded} {contentClasses}">
				{@render children()}
			</div>
		{/if}
	</div>
</label>
