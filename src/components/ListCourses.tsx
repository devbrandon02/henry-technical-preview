import { useEffect, useState } from "react";
import { CardCourses, LevelCourse } from "../styled-components";
import RankingCourses from "./RankingCourses";
import getAllCourses from "../services/Courses.get";
import { listCourses, listCoursesAdapter } from "../utilities/Course.types";

export const ListCourses = ({ optionFilter, setdetailCourse, detailCourse }: any) => {
	useEffect(() => {
		getCourses();
	}, [optionFilter.category || optionFilter.status]);

	const getCourses = async () => {
		let courses = await getAllCourses(optionFilter.category || "", optionFilter.status);
    console.log("Courses", courses);
		setcourses(courses || []);
	};

	const [courses, setcourses] = useState([]);

	return (
		<>
			<div style={{ marginTop: '20px' }}>
				{ courses.length < 1 && "No hay cursos" }
				{courses?.map((course: listCoursesAdapter) => (
					<CardCourses onClick={() => setdetailCourse({
            ...detailCourse,
            id: course.id
          })}>
						<div style={{ width: "60%", height: "100%" }}>
							<img className="courseImg" src={course.image} alt="" />
						</div>

						<div style={{ paddingLeft: "20px", width: "100%" }}>
							<h3 style={{ fontSize: "18px" }}>{course.title}</h3>
							<p
								style={{
									marginTop: "10px",
									fontSize: "12px",
									color: "#bcbcba",
                  textTransform: 'capitalize'
								}}
							>
								{course.description || "Sin descripcion"}
							</p>
							<div style={{ marginTop: "20px" }}>
								<RankingCourses
									ranking={course.ranking}
									difficulty={course.difficulty}
									sizeStart={"13px"}
								/>
							</div>
						</div>
					</CardCourses>
				))}
			</div>
		</>
	);
};
