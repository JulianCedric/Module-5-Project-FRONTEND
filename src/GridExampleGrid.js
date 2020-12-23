import _ from 'lodash'
import React from 'react'
import { Checkbox, Grid, Image } from 'semantic-ui-react'

const columns = _.times(10, (i) => (
  <Grid.Column key={i}>
  
    <Checkbox 
    />
    
  </Grid.Column>
))

const GridExampleGrid = () => <Grid inverted>{columns}</Grid>

export default GridExampleGrid