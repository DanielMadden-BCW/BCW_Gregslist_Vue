<template lang="">
  <div>
    <img :src="house.imgUrl" alt="" /><br/>
      {{ house }}
  </div>
</template>
<script>
import { computed, onMounted } from "vue"
import { housesService } from "../services/HousesService"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
export default {
  name: 'HouseDetails',
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        await housesService.getOne(route.params.id)
      } catch (error) {
        console.error(error)
      }
    });
    return {
      house: computed(() => AppState.activeHouse)
    }
  }
}
</script>
<style lang="">
</style>