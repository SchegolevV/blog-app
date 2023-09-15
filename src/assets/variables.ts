import { RegisterOptions } from 'react-hook-form'

const lengthUsernameAlert = 'Length must be from 3 to 20'
const lengthPasswordAlert = 'Length must be from 6 to 40'
const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const emailAlert = 'Email must be valid'

export const regUsernameOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'This is required field',
  },
  minLength: {
    value: 3,
    message: lengthUsernameAlert,
  },
  maxLength: {
    value: 20,
    message: lengthUsernameAlert,
  },
}

export const regEmailOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'This is required field',
  },
  pattern: {
    value: emailPattern,
    message: emailAlert,
  },
}

export const regPasswordOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'This is required field',
  },
  minLength: {
    value: 6,
    message: lengthPasswordAlert,
  },
  maxLength: {
    value: 40,
    message: lengthPasswordAlert,
  },
}
