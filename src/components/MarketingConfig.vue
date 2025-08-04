<template>
  <div class="bg-white rounded-2xl shadow p-6 w-full">
    <h2 class="text-lg font-semibold mb-4">营销活动配置</h2>

    <!-- Tab 切换 -->
    <div class="flex gap-4 mb-6 text-sm">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        :class="[
          'py-1 px-3 rounded',
          activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        ]"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Tab 内容展示 -->
    <div v-if="activeTab === '活动'" class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img src="/assets/coupon-icon.svg" alt="优惠券图标" class="w-8 h-8" />
        <span class="text-gray-800 font-medium">优惠券配置</span>
      </div>
      <button
        class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        @click="onConfigClick"
      >
        配置优惠券
      </button>
    </div>

    <div v-else-if="activeTab === '互动'" class="text-gray-600">
      <p>互动活动内容暂未开放</p>
    </div>

    <div v-else-if="activeTab === '内容'" class="text-gray-600">
      <p>营销内容管理功能开发中</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ['活动', '互动', '内容']
const activeTab = ref('活动')

function onConfigClick() {
  alert('请先登录后进行优惠券配置')
}
</script>
