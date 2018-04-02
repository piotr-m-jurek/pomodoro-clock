import * as React from 'react'
import {withTheme, WithTheme} from 'material-ui'


// interface TitleProps {
//   text: string
//   color: string
//   padding: number
// }

const TitleWithTheme = (props: { text: string, color?: string, padding: number } & WithTheme ) => (
  <h1 style={{backgroundColor: props.theme.palette.secondary.main}}>{props.text}</h1>
)

export default withTheme()(TitleWithTheme)
