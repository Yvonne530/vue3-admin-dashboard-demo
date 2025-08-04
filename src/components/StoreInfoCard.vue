<template>
  <div class="bg-white rounded-2xl shadow p-6 w-full">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">店铺概览</h2>
      <button
        class="text-sm bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
        @click="onFixStaff"
      >
        固定店员人数
      </button>
    </div>

    <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
      <div class="flex justify-between">
        <span>门店数</span>
        <span class="font-medium">{{ storeData.storeCount }}</span>
      </div>
      <div class="flex justify-between">
        <span>成交金额</span>
        <span class="font-medium">¥{{ formatNumber(storeData.salesAmount) }}</span>
      </div>
      <div class="flex justify-between">
        <span>平均月销售额</span>
        <span class="font-medium">¥{{ formatNumber(storeData.avgMonthlySales) }}</span>
      </div>
      <div class="flex justify-between">
        <span>营销率</span>
        <span class="font-medium">{{ storeData.marketingRate }}%</span>
      </div>
      <div class="flex justify-between">
        <span>客单价</span>
        <span class="font-medium">¥{{ formatNumber(storeData.avgOrderPrice) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// 模拟数据（后续可用 props 替换）
const storeData = reactive({
  storeCount: 23,
  salesAmount: 232300,
  avgMonthlySales: 222423,
  marketingRate: 45,
  avgOrderPrice: 34544
})

function onFixStaff() {
  alert('点击了“固定店员人数”按钮')
}

// 可选：格式化数字显示
function formatNumber(n) {
  return n.toLocaleString()
}
</script>
