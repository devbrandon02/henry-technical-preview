import { AiOutlineClockCircle, AiOutlineSchedule, AiOutlineMessage, AiOutlineSetting } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { TbCertificate } from 'react-icons/tb';
import './index.css'


const MenuNavs = () => {
  return (
		<>
			<div>
				<ol>
					<li>
            <AiOutlineClockCircle size={20} />
            <p>Main</p>
          </li>
					<li className='active'>
            <AiOutlineSchedule size={20} />
            <p>Courses</p>
          </li>
					<li>
            <AiOutlineSchedule size={20} />
            <p>schedule</p>
          </li>
					<li>
            <BsBook size={20} />
            <p>Materials</p>
          </li>
					<li>
            <TbCertificate size={20} />
            <p>Certeficates</p>
          </li> 
					<li>
            <AiOutlineMessage size={20} />
            <p>Messages</p>
          </li>
					<li>
            <AiOutlineSetting size={20} />
            <p>Setting</p>
          </li>
				</ol>
			</div>
		</>
	);
}



export default MenuNavs
