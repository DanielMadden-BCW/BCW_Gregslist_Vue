<template lang="">
<div class="col-4" >
  <router-link :to="{name:'JobDetails', params: {id: job.id}}" >
  <div class="card" >
    <h1>{{job.company}}</h1>
    <h2>{{job.jobTitle}}</h2>
    <p>Hours: {{job.hours}}</p>
    <p>Rate: {{job.rate}}</p>
  </div>
  </router-link>
  </div>
</template>
<script>
export default {
  name: 'Job',
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  setup(props) {

  }
}
</script>