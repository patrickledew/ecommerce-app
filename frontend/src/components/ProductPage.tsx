import { Container, Typography } from "@mui/material";
import { useGetListingById } from "../api/queries/listings/listings";
import { useParams } from "@tanstack/react-router";

export const ProductPage = () => {
  const { id } = useParams({ strict: false });
  const { data: product } = useGetListingById(Number(id));

  if (!product) return;
  return (
    <Container>
      <Typography variant={"h2"}>{product.name}</Typography>
    </Container>
  );
};
