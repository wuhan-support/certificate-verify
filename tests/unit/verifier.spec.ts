import verifySignature from '@/utils/verifier'
import Validity from '@/models/validity'

describe('verifier.ts', () => {
  it('should report success when providing good signature', () => {
    return verifySignature(
      '王冰',
      '产品部 | 网页团队',
      'wl4EABEIABAFAl6aFPYJED7IL6RyrW1uAAAAUwEAVhmKldiQxfsW2SvLmyLmFFOn_HMqNPSO80Z6Kri2y7J0BAOkMJpEh5OqtLkE8HdAKV7gaeslZ7BitvyAXZIx/UBE/_=YG89'
    )
  })
  it('should fail when providing bad signature', () => {
    return new Promise((resolve, reject) => {
      verifySignature(
        '王冰a',
        '产品部 | 网页团队',
        'wl4dajsfklasdjflasdfjadslfasjfaoewhfnajsfndsaoafjasdljkflasjdf_HMqNPSO80Z6Kri2y7J0BAOkMJpEh5OqtLkE8HdAKV7gaeslZ7BitvyAXZIx/UBE/_=YG89'
      )
        .then(() => {
          reject()
        })
        .catch(() => {
          resolve()
        })
    })
  })
  it('should report illegal argument when only providing some arguments', () => {
    return Promise.all([
      new Promise((resolve, reject) => {
        verifySignature(
          '王冰a',
          '产品部 | 网页团队',
          ''
        )
          .then(() => {
            reject()
          })
          .catch((err) => {
            if (err === Validity.ILLEGAL_ARGUMENTS) {
              resolve()
            } else {
              reject()
            }
          })
      }),
      new Promise((resolve, reject) => {
        verifySignature(
          '王冰a',
          '',
          'a'
        )
          .then(() => {
            reject()
          })
          .catch((err) => {
            if (err === Validity.ILLEGAL_ARGUMENTS) {
              resolve()
            } else {
              reject()
            }
          })
      }),
      new Promise((resolve, reject) => {
        verifySignature(
          '',
          'a',
          'a'
        )
          .then(() => {
            reject()
          })
          .catch((err) => {
            if (err === Validity.ILLEGAL_ARGUMENTS) {
              resolve()
            } else {
              reject()
            }
          })
      })
    ])
  })
})
