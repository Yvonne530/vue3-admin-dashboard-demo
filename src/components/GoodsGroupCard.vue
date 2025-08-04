<template>
  <div class="bg-white rounded-2xl shadow p-6 w-full mt-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">商品分组</h2>
      <select
        v-model="selectedGroup"
        class="border border-gray-300 rounded px-2 py-1 text-sm"
        @change="onGroupChange"
      >
        <option value="groupA">3年春夏款存货充足</option>
        <option value="groupB">应季库存少</option>
        <option value="groupC">新品低动销</option>
      </select>
    </div>

    <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
      <div class="flex justify-between">
        <span>款数</span>
        <span class="font-medium">{{ goodsData.stylesCount }}</span>
      </div>
      <div class="flex justify-between">
        <span>库存</span>
        <span class="font-medium">{{ formatNumber(goodsData.stock) }}</span>
      </div>
      <div class="flex justify-between">
        <span>库龄</span>
        <span class="font-medium">{{ goodsData.age }}</span>
      </div>
      <div class="flex justify-between">
        <span>销售率</span>
        <span class="font-medium">{{ goodsData.salesRate }}%</span>
      </div>
      <div class="flex justify-between">
        <span>主要商品</span>
        <span class="font-medium">{{ goodsData.mainProduct }}</span>
      </div>
      <div class="flex justify-between">
        <span>价格带</span>
        <span class="font-medium">¥{{ goodsData.priceRange }}</span>
      </div>
      <div class="flex justify-between">
        <span>折扣强度</span>
        <span class="font-medium">{{ goodsData.discountRate }}%</span>
      </div>
      <div class="flex justify-between">
        <span>销售状态</span>
        <span class="font-medium">{{ goodsData.salesStatus }}</span>
      </div>
    </div>

    <div class="mt-4 text-right">
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1 rounded"
        @click="onDetailClick"
      >
        商品明细
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const selectedGroup = ref('groupA')

const goodsData = reactive({
  stylesCount: 834,
  stock: 29234,
  age: '3年',
  salesRate: 60,
  mainProduct: 'T恤',
  priceRange: '1,000 - 3,000',
  discountRate: 56,
  salesStatus: '畅销'
})

function onGroupChange() {
  // TODO: 根据 selectedGroup 触发数据更新
  console.log('选择分组：', selectedGroup.value)
}

function onDetailClick() {
  alert('点击了“商品明细”按钮')
}

function formatNumber(n) {
  return n.toLocaleString()
}
</script>
