import { Brand } from "./Brand.js";
import { Category } from "./Category.js";
import { Client } from "./Client.js";
import { Combo } from "./Combo.js";
import { Heading } from "./Heading.js";
import { Order } from "./Order.js";
import { OrderStatus } from "./OStatus.js";
import { Product } from "./Product.js";
import { ProductType } from "./PType.js";
import { Role } from "./Role.js";
import { Shift } from "./Shift.js";
import { StockDiference } from "./StockDiference.js";
import { User } from "./User.js";
import { Cashbox } from "./Cashbox.js";
import { CashboxMoves } from "./CashboxMoves.js";
import { Sells } from "./Sells.js";

User.belongsTo(Role,{
    foreignKey: "role_id",
})
User.belongsToMany(Shift,{
    through: "user_shift",
    timestamps: false,
})




Product.belongsTo(Brand,{
    foreignKey: "brand_id",
})
Product.belongsTo(Category,{
    foreignKey: "category_id",
})
Product.belongsTo(ProductType,{
    foreignKey: "product_type_id",
})
Product.belongsTo(Heading,{
    foreignKey: "heading_id",
})

Product.belongsToMany(Order,{
    through: "orders_products",
    timestamps: false,
})
Product.belongsToMany(Combo,{
    through: "combos_products",
    timestamps: false,
})



Order.belongsTo(OrderStatus,{
    foreignKey: "order_status_id",
})

Order.belongsTo(Client,{
    foreignKey: "client_id",
})



Cashbox.belongsTo(Shift,{
    foreignKey: "shift_id",
})
Cashbox.hasMany(CashboxMoves,{
    foreignKey: "cashbox_moves_id",
})

CashboxMoves.belongsTo(Cashbox,{
    foreignKey: "cashbox_id",
})

StockDiference.belongsTo(User,{
    foreignKey: "user_id",
})



Sells.belongsTo(CashboxMoves,{
    foreignKey: "cashbox_moves_id",
})
Sells.belongsToMany(Product, {
    through: "sell_product",
    timestamps: false,
})
Sells.belongsToMany(Combo, {
    through: "sell_combo",
    timestamps: false,
})



Shift.belongsToMany(User,{
    through: "user_shift",
    timestamps: false,
})