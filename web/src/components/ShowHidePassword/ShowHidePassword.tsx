import { useState } from 'react'

import { Label, PasswordField, TextField } from '@redwoodjs/forms'

import Icon from '../Icon/Icon'

const ShowHidePassword = ({ label, name, ...rest }) => {
  // in leg cu props: din moment ce folosesc componente redwoodjs/forms,
  // adica TextField si PasswordField, ele primesc props de la parinte
  // si le trimit mai departe la inputul din ele
  // si ca sa nu mai trimit eu fiecare props, folosesc rest operator
  // care imi ia toate propsurile si le pune in rest
  const [isPasswordShowing, setIsPasswordShowing] = useState(false)

  const handleClick = () => {
    setIsPasswordShowing((previousValue) => !previousValue)
  }

  return (
    <>
      <div className="field relative">
        <Label name={name}>{label}</Label>
        {isPasswordShowing ? (
          // returns text input, otherwise returns password input
          <TextField name={name} placeholder="" {...rest} />
        ) : (
          <PasswordField name={name} placeholder="" {...rest} />
        )}

        <button className="absolute right-6 top-8" onClick={handleClick}>
          {isPasswordShowing ? (
            <Icon id="eyeOpened" size={32} />
          ) : (
            <Icon id="eyeClosed" size={32} />
          )}
        </button>
      </div>

      <div className="field relative">
        <label htmlFor={name}>{label}</label>

        <button className="absolute right-6 top-8"></button>
      </div>
    </>
  )
}

export default ShowHidePassword
