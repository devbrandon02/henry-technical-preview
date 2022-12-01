import { useState } from "react"
import { CardCourses } from "../styled-components"

export const ListCourses = () => {
  const [courses, setcourses] = useState([
    {
      id: 1,
      title: "Learning strategy: how instead of what",
      description: "this course is designd for non native English speakers who are interested is advancing their",
      image: ""
    },
    {
      id: 2,
      title: "Learning strategy: how instead of what",
      description: "this course is designd for non native English speakers who are interested is advancing their",
      image: ""
    },
    {
      id: 3,
      title: "Learning strategy: how instead of what",
      description: "this course is designd for non native English speakers who are interested is advancing their",
      image: ""
    },
    {
      id: 4,
      title: "Learning strategy: how instead of what",
      description: "this course is designd for non native English speakers who are interested is advancing their",
      image: ""
    },
    {
      id: 5,
      title: "Learning strategy: how instead of what",
      description: "this course is designd for non native English speakers who are interested is advancing their",
      image: ""
    },
    {
      id: 6,
      title: "Learning strategy: how instead of what",
      description: "this course is designd for non native English speakers who are interested is advancing their",
      image: ""
    },
    {
      id: 7,
      title: "Learning strategy: how instead of what",
      description: "this course is designd for non native English speakers who are interested is advancing their",
      image: ""
    }
  ])

  return (
    <>
      <div>
          {courses.map((course) => (
            <CardCourses>
              <div style={{ width: '50%', height: '100%' }}>
                <img
                  className="courseImg"
                  src="https://www.infoidiomas.com/wp-content/uploads/series.jpg" 
                  alt="" 
                  />
              </div>

              <div style={{ paddingLeft: '20px'}}>
                <h3 style={{fontSize: '18px'}}>{ course.title }</h3>
                <p style={{ marginTop: '10px', fontSize: '12px', color: '#bcbcba' }}>{ course.description }</p>
                <div></div>
              </div>
            </CardCourses>
          ))}
      </div>
    </>
  )
}
