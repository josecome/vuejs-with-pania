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

    const completed = async (id) => {
        let confirm_message = "Confirm to update task as completed"
        if (confirm(confirm_message) == false) {
            return false;
        }
        const v = { "status":"Completed" }
        const res = await axios.patch(`http://127.0.0.1:3000/task/${id}`, v,
          {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          }
        );
        console.log(res);
    }

    function TasksList(v) {
        status.value = v //Just in case other component need
        tasks.value = tasks.value.filter((task) => { return task.status === v })
    }

    const getData = async () => {
      const res = await axios.get("http://127.0.0.1:3000/task");
      tasks.value = res.data;
      console.log(res);
    }
    onMounted(getData);
    
</script>

<style>
    
</style>

<template>
    

</template>

<style scoped>

</style>
