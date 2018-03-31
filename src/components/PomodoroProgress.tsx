import * as React from 'react'
import './PomodoroProgress.scss'

interface ProgressProps {
  max: number
  current: number
  radius?: number
  strokeWidth?: number
  children?: JSX.Element
}

interface ProgressState {
  progress: number
  sqSize: number

}

export class PomodoroProgress extends React.Component<ProgressProps, ProgressState> {
  constructor (props: ProgressProps) {
    super(props)
    const {max,  current, radius, strokeWidth } = this.props
    this.state = {
      progress: current / max * 100,
      sqSize: (radius * 2) + strokeWidth
    }
  }

  static defaultProps: Partial<ProgressProps> = {
    radius: 100,
    strokeWidth: 10

  }

  componentWillReceiveProps ({current, max} : Partial<ProgressProps>) {
    this.setState({
      progress: current / max * 100,
    })
  }

  render () {
    const { radius, strokeWidth, children } = this.props
    const { sqSize } = this.state
    const center = sqSize / 2
    const dimensions = {
      width: sqSize,
      height: sqSize
    }
    const viewBox = `0 0 ${this.state.sqSize} ${this.state.sqSize}`
    const dashArray = this.props.radius * Math.PI * 2
    const dashOffset = dashArray - dashArray * this.state.progress / 100

    return (
      <div className="wrapper" style={dimensions}>
        <svg id="svg" width={sqSize} height={sqSize} viewBox={viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle
            r={radius}
            cx={center}
            cy={center}
            fill="transparent"
            strokeWidth={strokeWidth}
          />
          <circle
            id="bar"
            r={radius}
            cx={center}
            cy={center}
            fill="transparent"
            transform={`rotate(-90 ${center} ${center})`}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeWidth={strokeWidth}
          />
        </svg>
        {children}
      </div>
    )
  }
}
