import { FilterCourses } from '../../components/FilterCourses'
import Sidebar from '../../components/layouts/Sidebar/Sidebar'
import { ListCourses } from '../../components/ListCourses'
import { FilterLayout, MainContainer, SidebarLayout, Wrapper } from '../../styled-components'


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
        </MainContainer>
      </Wrapper>
    </>
  )
}


export default Dashboard
