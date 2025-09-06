import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export function useMonasteries() {
  return useQuery({ queryKey: ["monasteries"], queryFn: () => api.getMonasteries() });
}
export function useTours() {
  return useQuery({ queryKey: ["tours"], queryFn: () => api.getTours() });
}
export function useArchives() {
  return useQuery({ queryKey: ["archives"], queryFn: () => api.getArchives() });
}
export function useEvents() {
  return useQuery({ queryKey: ["events"], queryFn: () => api.getEvents() });
}
