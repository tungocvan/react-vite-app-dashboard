import DropdownMenu from "./DropdownMenu";
import TextLogo from "~/components/text/TextLogo";

const Header = ({ title }) => {	
	const handleLogout = () => {
		if (sessionStorage.getItem('token')) {
			sessionStorage.removeItem('token');
			document.location.reload();
		}
	};

	return (
		<header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700 flex justify-between items-center z-10 relative'>
			<div className='max-w-7xl py-4 px-4 sm:px-6 lg:px-8'>
				<TextLogo title={title} />
			</div>
			<div className="mr-3">
				<DropdownMenu logout={handleLogout} />
			</div>
		</header>
	);
};

export default Header;
