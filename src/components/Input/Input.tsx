import styled from "styled-components"

interface InputProps{
  placeholder : string
  value?: string;
  handleChange?:(e: React.ChangeEvent<HTMLInputElement>)=>void
}

const Input = ({placeholder,handleChange,value}:InputProps) => {
  return (
    <InputContainer>
        <InputContent placeholder={placeholder} onChange={handleChange} value={value}/>
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
