import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users, ChevronDown } from "lucide-react";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import TextLogo from "../text/TextLogo";

const SIDEBAR_ITEMS = [
	{
		name: "Overview",
		icon: BarChart2,
		color: "#6366f1",
		href: "/",
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


const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [activeItem, setActiveItem] = useState(null);

	const toggleSubMenu = (name) => {
		setActiveItem((prev) => (prev === name ? null : name));
	};

	return (
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
			<div className="flex flex-row justify-items-center items-center">
			<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
				>
					<Menu size={24} />										
				</motion.button>			
				{isSidebarOpen && <TextLogo title='HAMADA' /> }
			</div>
				<nav className='mt-8 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => (
						<div key={item.href} className='mb-2'>
							<Link to={item.href} onClick={() => item.submenu && toggleSubMenu(item.name)}>
								<motion.div className='flex items-center justify-between p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors'>
									<div className='flex items-center'>
										<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
										<AnimatePresence>
											{isSidebarOpen && (
												<motion.span
													className='ml-4 whitespace-nowrap'
													initial={{ opacity: 0, width: 0 }}
													animate={{ opacity: 1, width: "auto" }}
													exit={{ opacity: 0, width: 0 }}
													transition={{ duration: 0.2, delay: 0.3 }}
												>
													{item.name}
												</motion.span>
											)}
										</AnimatePresence>
									</div>
									{/* Hiển thị mũi tên nếu có submenu */}
									{item.submenu && (
										<ChevronDown
											size={20}
											className={`transition-transform ${
												activeItem === item.name ? "rotate-180" : ""
											}`}
										/>
									)}
								</motion.div>
							</Link>
							{/* Hiển thị submenu nếu có */}
							{item.submenu && activeItem === item.name && (
								<div className={`pl-8 ${isSidebarOpen ? "block" : "hidden"}`}>
									{item.submenu.map((subItem) => (
										<Link key={subItem.href} to={subItem.href}>
											<motion.div
												className='flex items-center p-2 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors'
											>
												<AnimatePresence>
													<motion.span
														className='whitespace-nowrap'
														initial={{ opacity: 0, width: 0 }}
														animate={{ opacity: 1, width: "auto" }}
														exit={{ opacity: 0, width: 0 }}
														transition={{ duration: 0.2, delay: 0.3 }}
													>
														{subItem.name}
													</motion.span>
												</AnimatePresence>
											</motion.div>
										</Link>
									))}
								</div>
							)}
						</div>
					))}
				</nav>
			</div>
		</motion.div>
	);
};


export default Sidebar;
