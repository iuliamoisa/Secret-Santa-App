const Icon = ({ id, size }) => {
  //daca nu pun nimic, e 24 default
  return (
    <svg width={size} height={size}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon
