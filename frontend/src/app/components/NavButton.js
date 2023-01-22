import React from 'react'
import styled from "styled-components";

const Button = styled.button`
    border: none;
    color: white    ;
    background-color: black;
`

function NavButton(props) {
    //Button
    //Text
    //Icon
    //onClick()
  return (
    <div>
        <Button>
            {props.children}
            {props.text}
        </Button>
    </div>
  )
}

export default NavButton