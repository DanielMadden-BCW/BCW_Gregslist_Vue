<template>
  <div class="row">
    <house v-for="house in houses" :key="house.id" :house="house"></house>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'
import House from '../components/House.vue'
export default {
  name: 'HousesPage',
  setup() {
    onMounted(async () => {
      try {
        await housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      houses: computed(() => AppState.houses)
    }
  },
  components: {
    House
  }
}
</script>
