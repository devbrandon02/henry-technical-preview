import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  background-color: #251916;
  height: 97vh;  
  padding: 15px 15px 15px 0px;
`


export const MainContainer = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 18px;
  height: 100%;
  overflow: auto;
  display: flex;
`

export const SidebarLayout = styled.div`
  height: 90%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
  align-items: center;
`

export const FilterLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  width: 50%;
  padding: 30px;
  border-radius: 15px;
  height: fit-content;
`

export const ContentCourseLayout = styled.div`
  background-color: white;
  width: 100%;
  height: fit-content;
`
