import ENV from '../../env'
import coursesAdapters from '../adapters/courses.adapters';
import lessonsAdapter from '../adapters/lessons.adapters';

const BASE_URL = ENV.BASE_URL


const getLeasonsById = async (id_course : string) => {
  try {
    let response = await (await fetch(`${BASE_URL}/lesson?id_course=${id_course}`)).json()
    let dataAdapterLessons = lessonsAdapter.getLessonByIdCourseAdapter(response.lessons)
    let dataAdapterCourses = coursesAdapters.getAllCoursesAdapters(response.course)

    
    return {
      lessons: dataAdapterLessons,
      courses: dataAdapterCourses
    }
  } catch (error) {
    console.error("@ERROR@getAllCourse@Service", error);
  }
}



export default getLeasonsById