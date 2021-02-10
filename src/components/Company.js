function Company (props) {

  return (
    <div className={'company'}>
      <img src={ props.image } alt='a logo' />
      <p>{ props.text }</p>
    </div>
  )

}

export default Company;