import styled from "styled-components";

export const TabsContent = styled.div`
  width: 100%;
  display: flex;
  height: 45px;
  padding-left: 10px;
  padding-top: 5px;
  border-bottom: 3px solid rgba(32, 151, 201, .6);
`

export const TabBox = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #e4e4e4;
  max-width: 200px;
  padding: 10px 0 10px 15px;
  cursor: pointer;
  ${props => props.active ? `opacity: 1;` : `opacity: .6;`}
  ${props => props.active ? `border-top: 1px solid #07a5fb;` : null}
  ${props => props.active ? `background-color: #fff;` : null}
  
  :hover {
    background-color: #fff;
  }
`

export const TabIcon = styled.i`
  font-size: 14px;
  padding: 0 5px;
  
  :hover {
    color: #07a5fb;
  }
`

export const TabName = styled.p`
  ${props => {
    if (props.active) {
      return (
        `:hover {
           border-bottom: 1px dashed #07a5fb;
          }
        `
      )
    }
  }}
`