import { useState } from "react";
import { VideoBox } from "../styled-components";
import VideoDemo from "../assets/videos/demo2.mp4";
import RankingCourses from "./RankingCourses";
import InstructorDetail from "./InstructorDetail";
import CardLesson from "./CardLesson";

const DetailCourses = () => {
	const [course, setcourse] = useState({
		id: 7,
		title: "Learning strategy: how instead of what",
		description:
			"this course is designd for non native English speakers who are interested is advancing their",
		image: "",
	});

	return (
		<>
			<div style={{ height: "100vh" }}>
				<div>
					<VideoBox controls>
						<source src={VideoDemo} type="video/mp4" />
					</VideoBox>
				</div>

				<div style={{ width: "100%", marginTop: "8px", display: 'flex' }}>
					<RankingCourses sizeStart={"16px"} />
				</div>

				<div style={{ marginTop: '10px' }}>
					<div>
						<h3 style={{ fontSize: "20px" }}>{course.title}</h3>
						<p style={{ marginTop: "10px", fontSize: "12px", color: "#bcbcba", lineHeight: '20px' }}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam aperiam rerum voluptate possimus quasi nihil aliquid minus eum similique optio eius, soluta, tempore dicta natus consequuntur suscipit error odio!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde numquam ipsam, obcaecati adipisci veniam optio, repellendus velit, nostrum debitis facere aut illum saepe et. Laborum enim voluptatum deleniti temporibus molestiae.
              lorem
						</p>
					</div>

          <div style={{ marginTop: '10px' }}>
            <InstructorDetail />
          </div>

          <div style={{ marginTop: '30px' }}>
            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Courses Content</h3>
              <p style={{ fontSize: "13px", color: "#bcbcba"}}>12 lecture * 2 hours</p>
            </div>

            <div style={{ marginTop: '20px' }}>
              <CardLesson />
            </div>
          </div>
				</div>
			</div>
		</>
	);
};

export default DetailCourses;
