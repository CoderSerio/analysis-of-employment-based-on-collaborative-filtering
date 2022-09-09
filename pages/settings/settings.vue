<template>
	<view class="settings">
		<view class="title">
			{{title}}
		</view>
		<fui-list>
			<fui-list-cell>标题文字</fui-list-cell>
			<fui-list-cell>
				<text>标题文字</text>
				<text class="fui-text__explain">说明文字</text>
			</fui-list-cell>
			<fui-list-cell arrow>
				<text>标题文字</text>
			</fui-list-cell>
		</fui-list>
	</view>
</template>

<script lang="ts">
	export default {
		data() {
			return {
				title: '我是设置页面'
			};
		}
	}
</script>

<style lang="scss">
	.settings {
		.title {
			text-align: center;
		}
	}
</style>
