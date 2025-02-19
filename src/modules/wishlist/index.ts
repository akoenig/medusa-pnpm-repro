import { Module } from "@medusajs/utils";
import { WishlistService } from "./service.ts";

export const WISHLIST_MODULE = "wishlistService";

export default Module(WISHLIST_MODULE, {
  service: WishlistService,
});
