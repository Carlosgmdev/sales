import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../Constants";
import Product from "../interfaces/Product";
import { useGlobalStore } from "../useGlobalStore";

const Products = () => {
  const { setLoading } = useGlobalStore();
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async (): Promise<void> => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    setProducts(response.data);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      await fetchProducts();
      setLoading(false);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <Typography variant="h4">Products</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(({ id, title, description, unitPrice, stock }) => (
              <TableRow key={id}>
                <TableCell>{title}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>{unitPrice}</TableCell>
                <TableCell>{stock}</TableCell>
                <TableCell>
                  <Chip
                    label={stock === 0 ? "Out of Stock" : stock < 100 ? "Low Stock" : "In Stock"}
                    color={stock === 0 ? "error" : stock < 100 ? "warning" : "success"}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
