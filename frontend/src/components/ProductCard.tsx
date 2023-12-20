import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Listing } from "../api/queries/listings/types";
import { theme } from "../theme";
import { Link } from "@tanstack/react-router";

interface ProductCardProps {
  listing: Listing;
}
export const ProductCard = ({ listing }: ProductCardProps) => {
  return (
    <Link to={`/products/$id`} params={{ id: listing.id.toString() }}>
      <Card sx={{ m: 2, p: 5 }}>
        <CardHeader title={listing.name} />
        <CardContent>
          <Typography fontWeight={"bold"} color={theme.palette.text.secondary}>
            ${listing.price.toFixed(2)}
          </Typography>
          {listing.description}
        </CardContent>
      </Card>
    </Link>
  );
};
