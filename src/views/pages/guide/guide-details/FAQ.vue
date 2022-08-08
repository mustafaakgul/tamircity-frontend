<template>
	<div :class="open ? 'faq open' : 'faq'" @click="$emit('toggleOpen', index)">
		<div class="vuecordion_phonebrand">{{ faq.vuecordion_phonebrand }}
		</div>
		<div class="vuecordion_phonemodel" :class="open ? 'faq open' : 'faq'" @click="$emit('toggleOpen', index)">
			<div class="container bg-light-grey ">
				<div class="row">
					<span> {{ faq.vuecordion_phonemodel }} </span> 
					<div class="col-md-6 text-start align-middle">Ekran Değişimi
					</div>
					<div class="col-md-3 align-middle">500 TL
					</div>
					<div class="col-md-3 ">
					<button type="button" class="btn btn-secondary choose-btn-sm">SEÇ</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FAQ',
	props: ['faq', 'index', 'open'],


}
</script>