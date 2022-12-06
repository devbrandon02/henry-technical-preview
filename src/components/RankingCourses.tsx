import { AiFillSignal } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import { LevelCourse } from "../styled-components";

type Props = {
  sizeStart: string
  ranking: number
  difficulty: string
};

const RankingCourses = ({ sizeStart, ranking = 0, difficulty } : Props) => {
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
					rating={ranking}
					starRatedColor="#e8c386"
					numberOfStars={5}
					name="rating"
					starDimension={sizeStart}
					starSpacing="2px"
				/>
			</div>

			<LevelCourse style={{ width: "100px", fontSize: "12px" }}>
				<AiFillSignal />
				<p>{ difficulty }</p>
			</LevelCourse>
		</div>
	);
}



export default RankingCourses