import { ButtonProps } from "../components/ProductButton";
import { CardProps } from "../components/ProductCard";
import { ProductImgProps } from "../components/ProductImage";
import { ProductTtitleProps } from "../components/ProductTitle";

export interface Products {
  id: string;
  title: string;
  img: string
}

export interface ProductsProps {
  count: number, incremet: ( cant: number ) => void, product: Products
}

export interface ProductCardProps {
  ( { children, product }: CardProps ): JSX.Element,
  Title: ( Props: ProductTtitleProps ) => JSX.Element,
  Img: ( Props: ProductImgProps ) => JSX.Element,
  Button: ( Props: ButtonProps ) => JSX.Element
}


export interface oncChangeArgs {
  product : Products; counter: number
}