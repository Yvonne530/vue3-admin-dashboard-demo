<template>
  <div class="bg-white rounded-2xl shadow p-6 w-full mt-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">客户分组</h2>
      <select
        v-model="selectedGroup"
        class="border border-gray-300 rounded px-2 py-1 text-sm"
        @change="onGroupChange"
      >
        <option value="groupA">2月正价核心会员</option>
        <option value="groupB">促销敏感型会员</option>
        <option value="groupC">高价值沉默会员</option>
      </select>
    </div>

    <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
      <div class="flex justify-between">
        <span>分组总人数</span>
        <span class="font-medium">{{ customerData.total }}</span>
      </div>
      <div class="flex justify-between">
        <span>开卡率</span>
        <span class="font-medium">{{ customerData.openRate }}%</span>
      </div>
      <div class="flex justify-between">
        <span>类型</span>
        <span class="font-medium">{{ customerData.type }}</span>
      </div>
      <div class="flex justify-between">
        <span>年龄段</span>
        <span class="font-medium">{{ customerData.ageRange }}</span>
      </div>
      <div class="flex justify-between">
        <span>复购率</span>
        <span class="font-medium">{{ customerData.repurchaseRate }}%</span>
      </div>
      <div class="flex justify-between">
        <span>RFM</span>
        <span class="font-medium">{{ customerData.rfm }}</span>
      </div>
      <div class="flex justify-between">
        <span>平均折扣</span>
        <span class="font-medium">{{ customerData.discountRate }}%</span>
      </div>
      <div class="flex justify-between">
        <span>客单价</span>
        <span class="font-medium">¥{{ formatNumber(customerData.avgOrderPrice) }}</span>
      </div>
    </div>

    <div class="mt-4 flex justify-end gap-3">
      <button
        class="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded"
        @click="onAdjustClick"
      >
        指标调整
      </button>
      <button
        class="bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-4 py-1 rounded"
        @click="onAnalyzeClick"
      >
        会员分析
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const selectedGroup = ref('groupA')

const customerData = reactive({
  total: 9213,
  openRate: 34,
  type: '老会员',
  ageRange: '30-50',
  repurchaseRate: 12,
  rfm: '重要发展',
  discountRate: 87,
  avgOrderPrice: 1213.9
})

function onGroupChange() {
  console.log('选择分组：', selectedGroup.value)
  // TODO：可对 customerData 进行更新
}

function onAdjustClick() {
  alert('点击了“指标调整”')
}

function onAnalyzeClick() {
  alert('点击了“会员分析”')
}

function formatNumber(n) {
  return n.toLocaleString()
}
</script>
