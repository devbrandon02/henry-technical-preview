import { AiFillSignal } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import { LevelCourse } from "../styled-components";

type Props = {
  sizeStart: string;
};

const RankingCourses = ({ sizeStart } : Props) => {
  return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
        alignItems: 'center'
			}}
		>
			<div>
				<StarRatings
					rating={2.5}
					starRatedColor="#e8c386"
					numberOfStars={5}
					name="rating"
					starDimension={sizeStart}
					starSpacing="2px"
				/>
			</div>

			<LevelCourse style={{ width: "100px", fontSize: "12px" }}>
				<AiFillSignal />
				<p>Beginneer</p>
			</LevelCourse>
		</div>
	);
}



export default RankingCourses