import * as React from 'react'
import {withTheme, WithTheme} from 'material-ui'


const TitleWithTheme = (props: {text: string} & WithTheme ) => (
  <h1 style={{backgroundColor: props.theme.palette.secondary.main}}>{props.text}</h1>
)

export default withTheme()(TitleWithTheme)
