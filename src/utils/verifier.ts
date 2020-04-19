import Validity from '@/models/validity'
import * as openpgp from 'openpgp'

const publicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
zQy94KM=
=ZgzG
-----END PGP PUBLIC KEY BLOCK-----`

async function verifySignature (name: string, group: string, sign: string): Promise<Validity> {
  if (
    !name || name === '' ||
    !group || group === '' ||
    !sign || sign === ''
  ) {
    return Promise.reject(Validity.ILLEGAL_ARGUMENTS)
  }

  const message = [name, group].join('-')
  const textSignature = `-----BEGIN PGP SIGNATURE-----

${sign.split('_').join('\n')}
-----END PGP SIGNATURE-----`

  // console.log(message, textSignature)

  const pgpPublicKey = (await openpgp.key.readArmored(publicKey)).keys[0]
  const pgpMessage = openpgp.message.fromText(message)
  const pgpSignature = await openpgp.signature.readArmored(textSignature)
  // console.log(pgpPublicKey, pgpMessage, pgpSignature)

  return new Promise((resolve, reject) => {
    openpgp.verify({
      publicKeys: pgpPublicKey,
      message: pgpMessage,
      signature: pgpSignature
    })
      .then((result) => {
        if (result && result.signatures.length === 1 && result.signatures[0].valid) {
          return resolve(Validity.OK)
        } else {
          return reject(Validity.SIGNATURE_MISMATCH)
        }
      })
      .catch((err) => {
        console.error(err)
        return reject(Validity.SIGNATURE_MISMATCH)
      })
  })
}

export default verifySignature
