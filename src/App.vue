<script setup>
    import { ref, onMounted } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useStoreTasks } from '@/stores/storetasks'
    import axios from 'axios'

    const store = useStoreTasks()

    const {  tasks, totalTasks, status } = storeToRefs(store)
    
    const taks_input = ref('')

    const addtask = async () => {
        alert(totalTasks.value)
        const v = { "id": (Number(totalTasks) + 1), "task":taks_input.value, "status":"Ongoing", "favorite":0 }
        const res = await axios.post('http://127.0.0.1:3000/task/', v,
          {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          }
        );
        console.log(res);
    }
    
</script>

<style>
    
</style>

<template>
    

</template>

<style scoped>

</style>
