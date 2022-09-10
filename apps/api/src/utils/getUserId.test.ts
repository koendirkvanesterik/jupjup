import { getUserId } from './getUserId'

it('should return `userId` from authorization token', () => {
  expect(
    getUserId(
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbDd3ZThqYmQwMDAwMDlpaDRnMXplandiIiwiaWF0IjoxNjYyODQzODM0fQ.rYq1sRs-QTO5i_l9wbQHd8TdcIEVzlCF0LUXtYzVQQs',
    ),
  ).toBe('cl7we8jbd000009ih4g1zejwb')
})

it('should throw an error if authorization token is not set', () => {
  expect(() => getUserId('Bearer ')).toThrowError()
})
