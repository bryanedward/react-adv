export interface CardProps {
  product: Products,
  children?: React.ReactElement[] | React.ReactElement
}

export interface Products {
  id: string;
  title: string;
  img: string
}

export interface ProductsProps {
  first: number, incremet: ( cant: number ) => void, product: Products
}

export interface ProductCardProps {
  ( { children, product }: CardProps ): JSX.Element,
  Title: ( { title }: { title?: string | undefined; } ) => JSX.Element,
  Img: ( { img }: { img?: string | undefined; } ) => JSX.Element,
  Button: () => JSX.Element
}