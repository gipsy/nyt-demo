// import { mount, shallow, render } from 'enzyme'
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'
import 'jest-styled-components'

// global.shallow = shallow
// global.render = render
// global.mount = mount

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
}

global.localStorage = localStorageMock
