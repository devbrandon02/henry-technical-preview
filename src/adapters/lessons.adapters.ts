import { listLessons } from "../utilities/Lessons.types"

const getLessonByIdCourseAdapter = (arrayLessons : Array<listLessons>) => {

  let listLessons: any  = arrayLessons.map((course : listLessons) => {
    return {
      id: course._id,
      title: course.title,
      idInstructor: course.id_instructor,
      description: course.description,
      idCourse: course.id_course,
      videoUrl: course.videoUrl
    }
  })

  return listLessons ? listLessons : []
}



export default {
  getLessonByIdCourseAdapter
}