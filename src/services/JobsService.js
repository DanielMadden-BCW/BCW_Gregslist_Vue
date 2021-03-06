import { AppState } from "../AppState"
import { api } from "./AxiosService"

class JobsService {
  async getJobs() {
    let res = await api.get("jobs")
    AppState.jobs = res.data
  }

  async getOne(id) {
    let res = await api.get("jobs/" + id)
    AppState.activeJob = res.data
  }
}

export const jobsService = new JobsService()