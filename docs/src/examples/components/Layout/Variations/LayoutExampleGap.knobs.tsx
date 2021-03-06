import PropTypes from 'prop-types'
import React from 'react'
import { rem } from 'src/lib'

import Knobs from 'docs/src/components/Knobs/Knobs'

const LayoutExampleGapKnobs: any = props => {
  const { onKnobChange, gap, vertical } = props

  return (
    <Knobs>
      <Knobs.Scalar name="gap" value={gap} onChange={onKnobChange} />
      <Knobs.Boolean name="vertical" value={vertical} onChange={onKnobChange} />
    </Knobs>
  )
}

LayoutExampleGapKnobs.propTypes = {
  onKnobChange: PropTypes.func.isRequired,
  gap: PropTypes.string,
  vertical: PropTypes.bool,
}

LayoutExampleGapKnobs.defaultProps = {
  gap: rem(5),
  vertical: false,
}

export default LayoutExampleGapKnobs
