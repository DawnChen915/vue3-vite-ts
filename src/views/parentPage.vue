<script setup lang='ts'>
import { provide, ref } from 'vue'
import MyTestPage from './myTestPage.vue';
const name = ref('zhangsanfeng')
const age=ref(19)
const change=(val:string)=>{
  name.value=val
}
provide('sex',0)
const add=()=>{
  age.value++
}

const children=[
  {name:'123',
  age:12}
]
</script>
<template>
  <!-- vue3页面 -->
  <div>
    <MyTestPage :name="name" @change="change" :age="age" :children="children" @add="add"></MyTestPage>
  </div>
</template>
<style scoped>

</style>