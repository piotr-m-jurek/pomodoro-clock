import { toTimerString } from './utils'

describe('utils', () => {
  describe('toTimerString', () => {
    it('is defined', () => {
      expect(toTimerString(0)).toBeDefined()
    })
    it('returns proper string format', () => {
      expect(toTimerString(0)).toBe('00:00')
    })
    it('formats seconds to proper number', () => {
      expect(toTimerString(61)).toBe('01:01')
      expect(toTimerString(125)).toBe('02:05')
    })
  })
})
