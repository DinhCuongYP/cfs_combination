'use client'

function Button(props) {
  const { children, onClick } = props
  return <button onClick={onClick}>{children}</button>
}

export default Button
