
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStoreTasks = defineStore('storetasks', () => {

  const tasks = ref([])

  const status = ref('Ongoing')

  const totalTasks = computed(() => tasks.value.length)

  return { tasks, totalTasks, status }
  
})
