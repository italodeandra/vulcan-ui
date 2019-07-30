import React from "react"
import "./Title.sass"

const Title = ({ children }) => {
    return (
      <h1 className="vui-ListItem-Title">{children}</h1>
    );
}

export default Title;