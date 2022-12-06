import { useState } from "react";
import DetailCourses from "../../components/DetailCourses";
import { FilterCourses } from "../../components/FilterCourses";
import Sidebar from "../../components/layouts/Sidebar/Sidebar";
import { ListCourses } from "../../components/ListCourses";
import {
	ContentCourseLayout,
	DetailCourse,
	FilterLayout,
	MainContainer,
	SidebarLayout,
	VideoBox,
	Wrapper,
} from "../../styled-components";

const Dashboard = () => {
	const [optionFilter, setoptionFilter] = useState({
    category: '',
    status: ''
  });

	return (
		<>
			<Wrapper>
				<SidebarLayout>
					<Sidebar />
				</SidebarLayout>

				<MainContainer>
					<FilterLayout>
						<FilterCourses
							optionFilter={optionFilter}
							setoptionFilter={setoptionFilter}
						/>
						<ListCourses optionFilter={optionFilter} />
					</FilterLayout>

					<ContentCourseLayout>
						<DetailCourse>
							<DetailCourses />
						</DetailCourse>
					</ContentCourseLayout>
				</MainContainer>
			</Wrapper>
		</>
	);
};

export default Dashboard;
