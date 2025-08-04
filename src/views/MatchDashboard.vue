<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-2xl font-bold mb-6">智能营销配置平台</h1>
      <div class="flex flex-col lg:flex-row gap-6">
        <ManualSelectPanel />
        <AiMatchPanel />
      </div>
    </div>
  </div>
</template>

<script setup>
import ManualSelectPanel from '@/components/ManualSelectPanel.vue'
import AiMatchPanel from '@/components/AiMatchPanel.vue'
</script>
