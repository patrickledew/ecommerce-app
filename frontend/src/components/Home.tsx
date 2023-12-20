import { Container, Paper } from "@mui/material";
import { useMemo } from "react";
import { useGetListings } from "../api/queries/listings/listings";
import { ProductCard } from "./ProductCard";

export const Home = () => {
  const { data } = useGetListings();
  const listings = useMemo(() => data ?? [], [data]);
  return (
    <Container>
      <Paper elevation={2} sx={{ m: 2, p: 5, display: "flex" }}>
        {listings.map((listing) => (
          <ProductCard listing={listing} />
        ))}
      </Paper>
    </Container>
  );
};
