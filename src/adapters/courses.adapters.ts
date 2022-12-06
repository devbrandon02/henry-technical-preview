import { listCourses } from "../utilities/Course.types"

const getAllCoursesAdapters = (arrayCourses : Array<listCourses>) => {

  let listCourses: any  = arrayCourses.map((course : listCourses) => {
    return {
      id: course._id,
      title: course.title,
      idInstructor: course.id_instructor,
      ranking: course.ranking,
      difficulty: course.difficulty,
      description: course.description,
      category: course.category,
      status: course.status,
      image: course.imageUrl
    }
  })

  return listCourses ? listCourses : []
}



export default {
  getAllCoursesAdapters
}