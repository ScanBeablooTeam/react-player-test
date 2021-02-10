function Company (props) {

  return (
    <div className={'company'}>
      <p>test</p>
      <img src={ props.image } alt='a logo' />
      <p>{ props.text }</p>
    </div>
  )

}

export default Company;