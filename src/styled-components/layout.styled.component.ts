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
  width: 35%;
  padding: 30px;
  border-radius: 15px;
`


export const CardCategorys = styled.div`
  display: flex;
  background-color: #f9f9f9;
  width: 100px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #dbd9da;
  cursor: pointer;
  gap: 8px;
`

export const CardCourses = styled.div`
  background-color: white;
  width: 95%;
  height: 120px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
`
