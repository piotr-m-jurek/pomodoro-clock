import * as React from 'react'
import './PomodoroProgress.scss'
import {
  withTheme,
  WithTheme
} from 'material-ui'

interface ProgressProps {
  max: number
  current: number
  radius?: number
  strokeWidth?: number
  children?: JSX.Element
}

export const PomodoroProgress: React.SFC<ProgressProps & WithTheme> = (props) => {
  const {
    children,
    current,
    max,
    theme
  } = props
  // default props
  const strokeWidth = props.strokeWidth || 10
  const radius = props.radius || 100

  const sqSize = (radius * 2) + strokeWidth
  const progress = current / max * 100
  const center = sqSize / 2
  const dimensions = { width: sqSize, height: sqSize }
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - dashArray * progress / 100

  return (
    <div className='wrapper' style={ dimensions }>
      <svg
        id='svg'
        width={ sqSize }
        height={ sqSize }
        viewBox={ viewBox }
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          r={ radius }
          cx={ center }
          cy={ center }
          fill='transparent'
          strokeWidth={ strokeWidth }
        />
        <circle
          id='bar'
          style={ { stroke: theme.palette.primary.main } }
          r={ radius }
          cx={ center }
          cy={ center }
          fill='transparent'
          transform={ `rotate(-90 ${center} ${center})` }
          strokeDasharray={ dashArray }
          strokeDashoffset={ dashOffset }
          strokeWidth={ strokeWidth }
        />
      </svg>
      { children }
    </div>
  )
}

export default withTheme()(PomodoroProgress)
