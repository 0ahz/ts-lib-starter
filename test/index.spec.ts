import { describe, expect, it } from 'vitest'

import { foo } from '../src'

describe('foo', () => {
  it('foo', () => {
    expect(foo).toBe('foo')
  })
})
