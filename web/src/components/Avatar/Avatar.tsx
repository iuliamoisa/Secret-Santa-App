import Icon from '../Icon/Icon'
import Indicator from '../Indicator/Indicator'

interface AvatarProps {
  // they are all optional
  avatar?: string
  alt?: string
  letter?: string
  icon?: string
  isSantaHatShowing?: boolean
  indicator?: 'success' | 'warning' | 'error' | null
}
const Avatar = ({
  avatar,
  alt,
  letter,
  icon,
  isSantaHatShowing,
  indicator,
}: AvatarProps) => {
  return (
    <div className="relative inline-block">
      {avatar && (
        <img
          src={avatar}
          alt={alt}
          className="h-18 w-18 rounded-full border-avatar border-white object-cover"
        />
      )}

      {letter && !avatar && (
        <div className="center h-18 w-18 rounded-full border-avatar border-white bg-spanishGreen text-2xl font-bold uppercase text-white">
          {letter}
        </div>
      )}

      {icon && !avatar && !letter && (
        <div className="center h-18 w-18 rounded-full border-avatar border-vistaBlue bg-spanishGreen text-2xl font-bold uppercase text-white">
          <Icon id={icon} size={32}></Icon>
        </div>
      )}

      {isSantaHatShowing && (
        <img
          src="/images/santa-hat.png"
          alt="Santa Hat"
          className="absolute -right-[15px] -top-[19px]" //pun [val] to avoid tailwindcss parsing; adica
          //daca n am chef sa salvez valoarea in variabila in index.css si sa o pun in locul lui [val]
        />
      )}

      {indicator && (
        <div className="absolute bottom-0 right-0">
          <Indicator status={indicator}></Indicator>
        </div>
      )}
    </div>
  )
}

export default Avatar
