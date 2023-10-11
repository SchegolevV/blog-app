import { RegisterOptions } from 'react-hook-form'

const lengthUsernameAlert = 'Length must be from 3 to 20'
const lengthPasswordAlert = 'Length must be from 6 to 40'
const emailPattern =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

const emailAlert = 'Email must be valid'

const urlPattern = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/g

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

export const regCheckboxOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'confirm to continue',
  },
}

export const regUrlOptions: RegisterOptions = {
  pattern: {
    value: urlPattern,
    message: 'Url must be valid',
  },
}

export const regTitleOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required',
  },
  maxLength: {
    value: 60,
    message: 'Title must be under 60',
  },
}

export const regTextOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required',
  },
  maxLength: {
    value: 1000,
    message: 'Text must be under 1000',
  },
}

export const regTagOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'Empty Tag not provided',
  },
  maxLength: {
    value: 15,
    message: 'Tag must be under 15 symbols',
  },
}
