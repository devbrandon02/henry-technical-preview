import DetailCourses from '../../components/DetailCourses'
import { FilterCourses } from '../../components/FilterCourses'
import Sidebar from '../../components/layouts/Sidebar/Sidebar'
import { ListCourses } from '../../components/ListCourses'
import { ContentCourseLayout, DetailCourse, FilterLayout, MainContainer, SidebarLayout, VideoBox, Wrapper } from '../../styled-components'

const Dashboard = () => {
  return (
    <>
      <Wrapper>
        <SidebarLayout>
          <Sidebar />
        </SidebarLayout>
        
        <MainContainer>
          <FilterLayout>
            <FilterCourses />
            <ListCourses />
          </FilterLayout>

          <ContentCourseLayout>
            <DetailCourse>
              <DetailCourses />
            </DetailCourse>  
          </ContentCourseLayout>
        </MainContainer>
      </Wrapper>
    </>
  )
}


export default Dashboard
