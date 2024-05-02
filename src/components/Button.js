function Button(props) {
  return (
    <button className={props.primary ? 'primary' : 'secondary'}>
      {props.primary ? 'Book Tickets': 'Explore Movies'}
    </button>
  )
}

export default Button;