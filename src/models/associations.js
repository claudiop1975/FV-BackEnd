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
import { Stock } from "./Stock.js";
import { User } from "./User.js";
import { Cashbox } from "./Cashbox.js";
import { Stock } from "./Stock.js";

User.belongsTo(Role,{
    foreignKey: "role_id",
})
User.belongsTo(Shift,{
    foreignKey: "shift_id",
})



Product.belongsTo(Brand,{
    foreignKey: "brand_id"
})
Product.belongsTo(Category,{
    foreignKey: "category_id"
})
Product.belongsTo(ProductType,{
    foreignKey: "product_type_id"
})
Product.belongsTo(Heading,{
    foreignKey: "heading_id"
})
Product.belongsToMany(Order,{
    through: "order_id"
})
Product.belongsToMany(Combo,{
    through: "combo_id"
})



Order.belongsTo(OrderStatus,{
    foreignKey: "order_status_id",
})
Order.belongsToMany(Product,{
    through: "product_id"
})
Order.belongsTo(Client,{
    foreignKey: "client_id",
})

Stock.belongsTo(Product,{
    foreignKey: "product_id",
})
Stock.belongsTo(Shift,{
    foreignKey: "shift_id",
})


Cashbox.belongsTo(Shift,{
    foreignKey: "shift_id",
})
Cashbox.belongsTo(User,{
    foreignKey: "user_id",
})



