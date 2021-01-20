<template lang="">
  <div>
    {{job}}
  </div>
</template>
<script>
import { computed, onMounted } from "vue"
import { useRoute } from 'vue-router'
import { AppState } from "../AppState"
import { jobsService } from "../services/JobsService"
export default {
  setup() {
    onMounted(async () => {
      try {
        await jobsService.getOne(useRoute().params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      job: computed(() => AppState.activeJob)
    }
  }
}
</script>