import { model } from "@medusajs/utils";

const List = model.define("wishlist_list", {
  id: model.id().primaryKey(),
  owner: model.id(),
  name: model.text(),
  productIds: model.array(),
});

export default List;
