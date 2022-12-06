export interface listCourses {
  _id: string
  title: string
  id_instructor: number
  ranking: number
  difficulty: string
  category: string
  status: string
  imageUrl: string
  description: string
}


export interface listCoursesAdapter {
  id: string
  title: string
  idInstructor: number
  ranking: number
  difficulty: string
  description: string
  category: string
  status: string
  image: string
}