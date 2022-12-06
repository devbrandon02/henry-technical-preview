import { AiFillPlayCircle, AiOutlineEllipsis } from "react-icons/ai";
import { CardLessonLayout } from "../styled-components";

export const CardLesson = ({ lessons } : any) => {
	return (
		<div>
			<div>
				<CardLessonLayout>
					<div
						style={{
							backgroundColor: "#da7554",
							width: "20%",
							borderTopLeftRadius: "15px",
							borderBottomLeftRadius: "15px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							color: "white",
						}}
					>
						<AiOutlineEllipsis size={50} />
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							flexDirection: "column",
							width: "100%",
							padding: "20px",
						}}
					>
						<p style={{ fontSize: "14px", color: "#bcbcba" }}>03:29 mins</p>
            
            <div>
							<h3>{ lessons.title }</h3>
            </div>

						<div>
							<p style={{ fontSize: "14px", color: "#bcbcba" }}>
								{ lessons.description }
							</p>
						</div>
					</div>

					<div
						style={{
							width: "30%",
							display: "flex",
							justifyContent: "center",
              alignItems: 'center',
              cursor: 'pointer'
						}}
					>
						<AiFillPlayCircle size={45} />
					</div>
				</CardLessonLayout>
			</div>
		</div>
	);
};

export default CardLesson;
