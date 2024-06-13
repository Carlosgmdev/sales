import { Page } from "./interfaces/Page";
import PointOfSaleTwoToneIcon from '@mui/icons-material/PointOfSaleTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';

export const pages: Page[] = [
  {
    title: "Sales",
    path: "sales",
    icon: () => <PointOfSaleTwoToneIcon />
  },
  {
    title: "Products",
    path: "products",
    icon: () => <CategoryTwoToneIcon />
    
  },
  {
    title: "Best Sellers",
    path: "best-sellers",
    icon: () => <StarTwoToneIcon />
  }
]