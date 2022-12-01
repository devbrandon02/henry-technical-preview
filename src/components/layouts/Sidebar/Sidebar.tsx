import { MenuNavs } from "./MenuNavs";
import { BiExit } from 'react-icons/bi';
import LogoHenry from '../../../assets/logo-white.png'

const Sidebar = () => {
	return (
		<>
			<div>
				<img style={{ width: "60px" }} src={LogoHenry} alt="" />
			</div>

			<div>
				<MenuNavs />
			</div>

			<div style={{ textAlign: "center" }}>
				<li style={{ listStyle: "none" }}>
					<BiExit size={25} />
					<p>Log out</p>
				</li>
			</div>
		</>
	);
};

export default Sidebar;
