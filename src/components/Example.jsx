import { forwardRef } from "react"
import styles from './Example.module.css'

const Example = forwardRef(function Example(props, ref) {
  return (
    <>
      <div className={styles.example} ref={ref} nav-show={props.id}>
        example {props.id}
      </div>
    </>
  )
})
export default Example
