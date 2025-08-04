<template>
  <div class="w-full lg:w-1/2 pl-4">
    <!-- 匹配推荐卡片 -->
    <div class="bg-white rounded-2xl shadow p-6 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">智能匹配推荐</h2>
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" v-model="useIFC" />
          使用IFC
        </label>
      </div>

      <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div class="flex justify-between">
          <span>推荐款数</span>
          <span class="font-medium">{{ matchData.recommendStyles }} 款</span>
        </div>
        <div class="flex justify-between">
          <span>价格带数</span>
          <span class="font-medium">{{ matchData.priceBands }} 段</span>
        </div>
        <div class="flex justify-between">
          <span>匹配商品数</span>
          <span class="font-medium">{{ matchData.matchedProducts }} 款</span>
        </div>
        <div class="flex justify-between">
          <span>预计影响人数</span>
          <span class="font-medium">{{ formatNumber(matchData.impactedUsers) }} 人</span>
        </div>
      </div>

      <div class="mt-4">
        <div class="text-sm text-gray-700 mb-2">细分人群：</div>
        <ul class="list-disc ml-6 text-sm text-gray-800">
          <li v-for="group in matchData.subGroups" :key="group">{{ group }}</li>
        </ul>
      </div>

      <div class="mt-4 text-right">
        <button
          class="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-1 rounded"
          @click="onViewDetail"
        >
          查看分组明细
        </button>
      </div>
    </div>

    <!-- 营销活动配置区域 -->
    <div class="bg-white rounded-2xl shadow p-6 mb-6">
      <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">营销活动配置</h2>
        <div class="flex gap-4 text-sm">
          <button
            class="py-1 px-3 rounded"
            :class="activeTab === '活动' ? activeTabClass : inactiveTabClass"
            @click="activeTab = '活动'"
          >
            活动
          </button>
          <button
            class="py-1 px-3 rounded"
            :class="activeTab === '互动' ? activeTabClass : inactiveTabClass"
            @click="activeTab = '互动'"
          >
            互动
          </button>
          <button
            class="py-1 px-3 rounded"
            :class="activeTab === '内容' ? activeTabClass : inactiveTabClass"
            @click="activeTab = '内容'"
          >
            内容
          </button>
        </div>
      </div>

      <div class="text-sm text-gray-700 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/assets/coupon-icon.svg" alt="优惠券图标" class="w-6 h-6" />
          <span>优惠券配置</span>
        </div>
        <button class="text-blue-500 text-sm hover:underline" @click="onCouponClick">
          去配置
        </button>
      </div>
    </div>

    <!-- 多触点转化区域 -->
    <div class="bg-white rounded-2xl shadow p-6">
      <h2 class="text-lg font-semibold mb-4">多触点转化</h2>
      <div class="flex flex-wrap gap-4 text-sm text-gray-700">
        <div v-for="(item, index) in touchpoints" :key="index" class="flex flex-col items-center">
          <img :src="item.icon" alt="" class="w-8 h-8 mb-1" />
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const useIFC = ref(true)
const activeTab = ref('活动')

const matchData = {
  recommendStyles: 12,
  priceBands: 5,
  matchedProducts: 15,
  impactedUsers: 6921,
  subGroups: ['1,300人', '1,800~2,000人', '821人']
}

const touchpoints = [
  { label: '导购任务', icon: '/assets/guide-icon.svg' },
  { label: '企业微信', icon: '/assets/wecom-icon.svg' },
  { label: '短消息', icon: '/assets/msg-icon.svg' },
  { label: '短信', icon: '/assets/sms-icon.svg' },
  { label: '私域推送', icon: '/assets/push-icon.svg' }
]

const activeTabClass = 'bg-blue-500 text-white'
const inactiveTabClass = 'bg-gray-100 text-gray-700 hover:bg-gray-200'

function onViewDetail() {
  alert('点击了“查看分组明细”按钮')
}

function onCouponClick() {
  alert('请先登录后配置优惠券')
}

function formatNumber(n) {
  return n.toLocaleString()
}
</script>
