<template>
  <!-- vue3页面 -->
  <div>
    <el-button @click="changeName" :icon="Edit">{{ props.name }}</el-button>
    <el-input type="button" @click="add" :value="props.age" />
  </div>
</template>

<script setup lang='ts'>
import { inject, ref,onMounted } from 'vue'
import {Edit} from '@element-plus/icons-vue'
interface Child {
  name: string
  age: number
}
interface Props {
  age: number
  name: string
  children: Child[]
}
const sex=inject('sex')
const props = withDefaults(defineProps<Props>(), {
  age: 12,
  name: '123',
  children: () => [{ age: 123, name: '2321' }],
})
const myName = ref('wangermazi')
const changeName = () => {
  myName.value = 'liudehua'
  emits('change', 'liudehua')
}
const add=()=>{
  emits('add')
}
const emits = defineEmits<{
  (e: 'change', value: string): void,
  (e: 'add', ): void
}>()
onMounted(()=>{
  console.log(sex)
})
</script>

<style scoped>
</style>