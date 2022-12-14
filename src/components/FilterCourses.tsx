import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import FlagChinese from "../assets/flag-china.svg";
import FlagFrance from "../assets/flag-france.svg";
import FlagUk from "../assets/flag-uk.svg";
import FlagSpain from "../assets/flag-spain.svg";
import { CardCategorys } from "../styled-components";

export const FilterCourses = ({ setoptionFilter, optionFilter }: any) => {
	const [categorysCourses, setcategorysCourses] = useState([
		{
			id: 1,
			name: "English",
			image: FlagUk,
		},
		{
			id: 2,
			name: "Spanish",
			image: FlagSpain,
		},
		{
			id: 3,
			name: "Frech",
			image: FlagFrance,
		},
		{
			id: 4,
			name: "Chinese",
			image: FlagChinese,
		},
	]);

	return (
		<>
			<div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div>
						<h3>Courses</h3>
					</div>

					<div>
						<AiOutlineSearch size={25} />
					</div>
				</div>

				<div
					style={{
						display: "flex",
						marginTop: "10px",
						gap: "20px",
						color: "#bcbcba",
					}}
				>
					<div onClick={() => setoptionFilter({ status: undefined })}>
						<p style={{ fontWeight: optionFilter.status === 'All' ? 'bold' : '' }}>All</p>
					</div>

					<div onClick={() => setoptionFilter({ status: 'Active' })}>
						<p style={{ fontWeight: optionFilter.status === 'Active' ? 'bold' : '' }}>Active</p>
					</div>

					<div onClick={() => setoptionFilter({ status: 'Completed' })}>
						<p style={{ fontWeight: optionFilter.status === 'Completed' ? 'bold' : '' }}>Completed</p>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						marginTop: "15px",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div style={{ display: "flex", gap: "8px", fontSize: "12px" }}>
						{categorysCourses.map((category) => (
							<CardCategorys
								style={{
									borderColor:
										optionFilter.category === category.name ? "#63433B" : "",
								}}
								onClick={() =>
									setoptionFilter({
										category: category.name,
									})
								}
								key={category.id}
							>
								<img style={{ width: "20px" }} src={category.image} alt="" />
								<p>{category.name}</p>
							</CardCategorys>
						))}
					</div>

					<div>
						<GoSettings />
					</div>
				</div>
			</div>
		</>
	);
};
