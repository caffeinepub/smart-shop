import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CartItem {
    productId: bigint;
    quantity: bigint;
}
export interface backendInterface {
    addProduct(id: bigint, name: string, price: bigint, description: string, category: string, imageRef: string): Promise<void>;
    addToCart(productId: bigint, quantity: bigint): Promise<void>;
    clearCart(): Promise<void>;
    getCartContents(): Promise<Array<CartItem>>;
}
