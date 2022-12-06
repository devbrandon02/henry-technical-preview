import { useEffect, useState } from "react";
import DetailCourses from "../../components/DetailCourses";
import { FilterCourses } from "../../components/FilterCourses";
import Sidebar from "../../components/layouts/Sidebar/Sidebar";
import { ListCourses } from "../../components/ListCourses";
import getLeasonsById from "../../services/Lessons.get";
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
	const [detailCourse, setdetailCourse] = useState({
		id: "",
		course: [],
		lessons: [],
	});

	const [optionFilter, setoptionFilter] = useState({
		category: "",
		status: "",
	});

	useEffect(() => {}, []);

	useEffect(() => {
		getLessons();
	}, [detailCourse.id]);

	const getLessons = async () => {
		let response : any = await getLeasonsById(detailCourse.id);
		console.log("Courses", response);
		setdetailCourse({
      ...detailCourse,
      lessons: response.lessons,
      course: response.courses[0]
    });
	};

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
						<ListCourses
              detailCourse={detailCourse}
							setdetailCourse={setdetailCourse}
							optionFilter={optionFilter}
						/>
					</FilterLayout>

					<ContentCourseLayout>
						<DetailCourse>
							<DetailCourses
								detailCourse={detailCourse}
								setdetailCourse={setdetailCourse}
							/>
						</DetailCourse>
					</ContentCourseLayout>
				</MainContainer>
			</Wrapper>
		</>
	);
};

export default Dashboard;
