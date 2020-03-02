<template>
	<view class="page">
		<view class="goodscontent  margin-top-sm">
			<view class="flex cusform-group padding-sm">
				<text class="title">托盘数量</text>
				<number-input unit="托" v-model="goodsInfo.plNumber" type="number"></number-input>
			</view>
			<view class="flex cusform-group padding-sm">
				<text class="title">纸箱数量</text>
				<number-input v-model="goodsInfo.csNumber" type="number"></number-input>
			</view>
		</view>
		<view class="goodscontent margin-top">
			<view class="cusform-group padding-sm">
				<text class="title">预估重量</text>
				<number-input t="" v-model="goodsInfo.weight" type="number"></number-input>
			</view>
		</view>

	</view>
</template>

<script>
	import numberInput from '@/components/numberInput.vue';
	export default {
		components: {
			numberInput
		},
		data() {
			return {
				goodsInfo:{
					plNumber: '',
					csNumber:'',
					weight:'',
				}
			}
		},

		onLoad(options) {
			// console.log('更新了没有呀')
		},
		onShow() {
		},
		methods: {
		}
	}
</script>

<style scoped lang="scss">
	@import "./index.scss";

	.page {
		padding-bottom: 52px;

		.title {
			font-size: 15px;
		}
	}

	.goodscontent {
		background-color: #fff;
		border-radius: 10px;
	}

	.cusform-group {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.title {
			width: 33%;
			font-size: 15px;
		}
	}
</style>
