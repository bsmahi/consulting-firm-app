import { apiClient } from './ApiClient'

/* BenchProfiles */
export const retrieveAllBenchProfilesApi = () => apiClient.get(`/api/non-secure/benchprofiles/fetch-users`);
export const createBenchProfilesApi = (benchprofiles) => apiClient.post(`/api/non-secure/benchprofiles/create-bench-profiles`, benchprofiles);
export const updateBenchProfileApi = (id, benchprofiles) => apiClient.put(`/api/non-secure/benchprofiles/${id}`, benchprofiles);
export const deleteBenchProfileApi = (id) => apiClient.delete(`/api/non-secure/benchprofiles/delete-users/${id}`);

/* DailySubmissions */

/* Interviews */
export const retrieveAllInterviewsApi = () => apiClient.get(`/api/non-secure/interviews/fetch-interviews`);
export const retrieveInterviewApi = (id) => apiClient.get(`/api/non-secure/interviews/fetch-interviews/${id}`);
export const createInterviewsApi = (interview) => apiClient.post(`/api/non-secure/interviews/create-interview`, interview);
export const updateInterviewApi = (id, interview) => apiClient.put(`/api/non-secure/interviews/interviews/${id}`, interview);
export const deleteInterviewsApi = (id) => apiClient.delete(`/api/non-secure/interviews/delete-interview-by-id/${id}`);


/* Placements */
export const retrieveAllPlacementsApi = () => apiClient.get(`/api/non-secure/placements/fetch-Placements`);
export const createPlacementsApi = (placements) => apiClient.post(`/api/non-secure/placements/create-placement`, placements);
export const updatePlacementsApi = (id, placements) => apiClient.put(`/api/non-secure/placements/${id}`, placements);
export const deletePlacementsApi = (id) => apiClient.delete(`/api/non-secure/placements/delete-placement/${id}`);
