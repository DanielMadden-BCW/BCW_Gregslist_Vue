<template lang="">
  <div class="row" >
    <job v-for="job in jobs" :key="job.id" v-bind:job="job" ></job>
  </div>
</template>
<script>
import { computed, onMounted } from "vue"
import Job from '../components/Job.vue'
import { jobsService } from '../services/JobsService'
import { AppState } from "../AppState"
export default {
  name: 'JobsPage',
  setup() {
    onMounted(async () => {
      try {
        await jobsService.getJobs()
        console.log(AppState.jobs)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      jobs: computed(() => AppState.jobs)
    }
  },
  components: {
    Job
  }
}
</script>