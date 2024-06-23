export default interface Product {
    id: string;
    title: string;
    description?: string;
    price: number;
    quantity?: number | string;
    images?: Array<string>;
    colors?: Array<string>;
    units?: number
    onsale?: boolean
    image?: string; // Asegurarse de que image esté presente
    color?: string;
 }
