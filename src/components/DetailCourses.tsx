import { useEffect, useState } from "react";
import { VideoBox } from "../styled-components";
import VideoDemo from "../assets/videos/demo2.mp4";
import RankingCourses from "./RankingCourses";
import InstructorDetail from "./InstructorDetail";
import CardLesson from "./CardLesson";
import ReactPlayer from "react-player";
import { listCourses, listCoursesAdapter } from "../utilities/Course.types";
import { listLessons } from "../utilities/Lessons.types";

const DetailCourses = ({ detailCourse, setoptionFilter }: any) => {
	const [course, setcourse] = useState<listCoursesAdapter>();
	const [lessons, setLessons] = useState([]);
	const [reproductorVideo, setreproductorVideo] = useState<any>(undefined);

	useEffect(() => {
		console.log("detail course", detailCourse);

		if (detailCourse.id !== "") {
			console.log("Entro", detailCourse);

			setcourse(detailCourse.course);
			setLessons(detailCourse.lessons);
		}
	}, [detailCourse.id]);

	return (
		<>
			{lessons.length > 0 ? (
				<div style={{ height: "100vh" }}>
          { reproductorVideo?.videoUrl !== undefined ? (
            <div>
              <ReactPlayer
                url={reproductorVideo?.videoUrl}
                className="react-player"
                playing
                width="100%"
                height="400px"
              />
            </div>
          ) : (
            <div>
              <img width="100%" height="400px" src={course?.image} alt="" />
            </div>
          )}

					<div style={{ width: "100%", marginTop: "8px", display: "flex" }}>
						<RankingCourses
							ranking={course?.ranking}
							sizeStart={"16px"}
							difficulty={course?.difficulty}
						/>
					</div>

					<div style={{ marginTop: "10px" }}>
						<div>
							<h3 style={{ fontSize: "20px" }}>{course?.title}</h3>
							<p
								style={{
									marginTop: "10px",
									fontSize: "12px",
									color: "#bcbcba",
									lineHeight: "20px",
								}}
							>
								{course?.description}
							</p>
						</div>

						<div style={{ marginTop: "10px" }}>
							<InstructorDetail />
						</div>

						<div style={{ marginTop: "30px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<h3>Courses Content</h3>
								<p style={{ fontSize: "13px", color: "#bcbcba" }}>
									12 lecture * 2 hours
								</p>
							</div>

							{lessons.map((lesson: listLessons) => (
								<div
									onClick={() => setreproductorVideo(lesson)}
									style={{ marginTop: "20px", cursor: "pointer" }}
								>
									<CardLesson lessons={lesson} />
								</div>
							))}
						</div>
					</div>
				</div>
			) : (
				<h2>No hay lecciones disponibles para este curso</h2>
			)}
		</>
	);
};

export default DetailCourses;
