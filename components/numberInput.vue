<template>
	<view class="numberInput">
		<text class=" cicon cicon-reduce text-gray cuIcon-move" @click="reduce"></text>
		<input class="padding-lr text-center cusinput" :type="type || 'text'" :value="value" @input="onInput" />
		<text class="cunit" v-if="unit">{{unit}}</text>
		<text class="cicon  cicon-add lg text-gray cuIcon-add" @click="add"></text>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: String,
				default: '',
			},
			type: String,
			unit: {
				type:String,
				require:true
			},
		},
		data() {
			return {
				cvalue:''
			}
		},

		onLoad(options) {
		},
		methods: {
			isInteger(num) {
				if (!isNaN(Number(num)) && Number(num) % 1 === 0) {
					return true;
				}
				return false;
			},
			onInput(e) {
				let cval = e.target.value;
				cval = cval.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
				cval = cval.replace(/^\./g, ""); //验证第一个字符是数字而不是
				cval = cval.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
				cval = cval.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
				// cval = cval.replace(/^(\-)*(\d+)\.(\d).*$/, '$1$2.$3'); //只能输入一个小数
				cval = cval.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
				console.log('cval',cval)
				//setTimeout 目的为了更新显示的input框里的值
				this.$emit('input', '');
				setTimeout(()=>{
					this.$emit('input', cval);
				},0)
			},
			reduce() {
				if (this.value >= 1) {
					let newVal = Number(this.value) - 1;
					if (!this.isInteger(newVal)) {
						newVal = newVal.toFixed(2);
					}
					this.$emit('input', newVal);
				}
			},
			add(e) {
				let newVal = Number(this.value) + 1;
				if (!this.isInteger(newVal)) {
					newVal = newVal.toFixed(2);
				}
				this.$emit('input', newVal);
			}
		}
	}
</script>

<style scoped lang="scss">
	.numberInput {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #ccc;
		height: 35px;
		border-radius: 35px;
		box-sizing: border-box;
		width: 200px;

		.cusinput {
			flex-grow: 1;
		}

		.cunit {
			padding-right: 15px;
			white-space: nowrap;
		}

		.cicon {
			width: 45px;
			height: 100%;
			text-align: center;
			border-radius: 50px;
			font-size: 24px;
			padding: 3px;
			padding-bottom: 5px;
			box-sizing: border-box;
			border: 1px solid #ccc;
			vertical-align: middle;


			&-reduce {
				// margin-top: -5px;
				border-right: 1px solid #ccc;
			}

			&-add {
				border-left: 1px solid #ccc;
			}
		}
	}
</style>
