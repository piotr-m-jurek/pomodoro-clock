import * as React from 'react'
import './PomodoroProgress.scss'

interface ProgressProps {
  max: number
  current: number
  radius?: number
  strokeWidth?: number
  children?: JSX.Element
}

export class PomodoroProgress extends React.Component<ProgressProps, {}> {
  
  static defaultProps: Partial<ProgressProps> = {
    radius: 100,
    strokeWidth: 10

  }

  render () {
    const {
      radius,
      strokeWidth,
      children,
      current,
      max
    } = this.props

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
}
