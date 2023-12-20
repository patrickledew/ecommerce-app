import { useQuery } from "@tanstack/react-query";
import api from "../../api";
import { Listing } from "./types";

const route = "/Listings";

export const useGetListings = () =>
  useQuery<Listing[]>({
    queryKey: [route],
    queryFn: async () => (await api.get(route)).data,
  });

export const useGetListingById = (id: number) =>
  useQuery<Listing>({
    queryKey: [route],
    queryFn: async () => (await api.get(`${route}/${id}`)).data,
  });

export const useAddListing = (listing: Omit<Listing, "id">) =>
  useQuery({
    queryKey: [route],
    queryFn: async () => (await api.post(route, listing)).data,
  });
