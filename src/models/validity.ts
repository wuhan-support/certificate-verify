enum Validity {
  /** in progress or not started */
  WAITING,
  /** signature OK */
  OK,
  /** signature format valid, but not passing signature verification */
  SIGNATURE_MISMATCH,
  /** missing one or more arguments */
  ILLEGAL_ARGUMENTS,
}

export default Validity
