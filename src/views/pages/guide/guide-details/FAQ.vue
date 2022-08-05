<template>
	<div :class="open ? 'faq open' : 'faq'" @click="$emit('toggleOpen', index)">
		<div class="vuecordion_phonebrand">{{ faq.vuecordion_phonebrand }}</div>
		<div class="vuecordion_phonemodel">{{ faq.vuecordion_phonemodel }}</div>
	</div>
</template>

<script>
export default {
	name: 'FAQ',
	props: ['faq', 'index', 'open']
}
</script>