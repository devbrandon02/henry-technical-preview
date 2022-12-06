import ENV from '../../env'
import coursesAdapters from '../adapters/courses.adapters';

const BASE_URL = ENV.BASE_URL


const getAllCourses = async (category : string, status : string = '') => {
  try {
    let response = await (await fetch(`${BASE_URL}/courses?category=${category}&status=${status}`)).json()
    let dataAdapter = coursesAdapters.getAllCoursesAdapters(response.data)
    
    return dataAdapter
  } catch (error) {
    console.error("@ERROR@getAllCourse@Service", error);
  }
}



export default getAllCourses