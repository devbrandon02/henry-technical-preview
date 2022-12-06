import styled from "styled-components"

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
  height: 145px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  cursor: pointer;

  &:hover {
    border: 1px solid #E3E0DF;
  }
`

export const LevelCourse  = styled.div`
  display: flex;
  width: 100%;
  font-size: 12px;
  gap: 5px;
  background-color: #f8f9f8;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  color: #bcbcba;
`

export const DetailCourse  = styled.div`
  padding: 30px;
`

export const VideoBox = styled.video`
  width: 100%;
  height: 200%;
  border-radius: 15px;
  border: 1px solid #bcbcba;
`

export const CardLessonLayout = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  height: 150px;
  border-radius: 15px;
  border: 1px solid #bcbcba;
`