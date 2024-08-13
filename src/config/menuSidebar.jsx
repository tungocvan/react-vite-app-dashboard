import { BarChart2, DollarSign,  Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
const menuSidebar = [
	{
		name: "Overview",
		icon: BarChart2,
		color: "#6366f1",
		href: "/overview",
	},
	{ 
		name: "Products", 
		icon: ShoppingBag, 
		color: "#8B5CF6", 
		href: "/products",
		submenu: [
			{ name: "All Products", href: "/products/all" },
			{ name: "Categories", href: "/products/categories" }
		]
	},
	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
	{ 
		name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales",
		submenu: [
			{ name: "All Sales", href: "/sales/all" },
			{ name: "Categories", href: "/sales/categories" }
		] 
	},
	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

export default menuSidebar ;
