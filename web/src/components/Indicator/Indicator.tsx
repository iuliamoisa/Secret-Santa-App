import Icon from '../Icon/Icon'

interface IndicatorProps {
  status: 'success' | 'warning' | 'error'
}
const Indicator = ({ status }: IndicatorProps) => {
  return (
    <>
      {/* success */}
      {status === 'success' && (
        <div className="indicator border-white bg-spanishGreen text-white">
          <Icon id="check" size={16}></Icon>
        </div>
      )}

      {/* warning */}
      {status === 'warning' && (
        <div className="indicator border-white bg-supernova text-black">
          <Icon id="question" size={16}></Icon>
        </div>
      )}

      {/* error */}
      {status === 'error' && (
        <div className="indicator border-white bg-orangeRed text-white">
          <Icon id="minus" size={16}></Icon>
        </div>
      )}
    </>
  )
}

export default Indicator
