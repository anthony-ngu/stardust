import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

import { customPropTypes, createComponent, getElementType, getUnhandledProps } from '../../lib'
import buttonRules from './buttonRules'
import buttonVariables from './buttonVariables'

/**
 * A button.
 */
const Button: any = (props: any) => {
  const ElementType = getElementType(Button, props)
  const rest = getUnhandledProps(Button, props)
  const { styles, className } = props

  return <ElementType {...rest} className={cx('ui-button', styles.root, className)} />
}

Button.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** A button can appear circular. */
  circular: PropTypes.bool,

  /** A bunch of styles we might not need. */
  styles: PropTypes.object,
}

Button.handledProps = ['as', 'circular', 'className', 'styles']

Button.defaultProps = {
  as: 'button',
}

export default createComponent(Button, {
  rules: buttonRules,
  variables: buttonVariables,
})
