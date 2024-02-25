import styled from "styled-components"

interface InputProps{
  placeholder : string
}

const Input = ({placeholder}:InputProps) => {
  return (
    <InputContainer>
        <InputContent placeholder={placeholder}/>
    </InputContainer>
  )
}


export default Input


const InputContainer = styled.div`
  width:300px;
  height: 50px;
  padding:10px;
  border : 1px solid black;
  border-radius: 10px;
`
const InputContent = styled.input`
  width:100%;
  height:100%;
  border: none
`
