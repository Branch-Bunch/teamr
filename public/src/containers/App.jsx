import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import CardContainer from './CardsContainer'
import DetailedContainer from './DetailedContainer'

const App = () => (
  <Grid>
    <Row>
      <Col>
        <CardContainer />
      </Col>
      <Col>
        <DetailedContainer />
      </Col>
    </Row>
  </Grid>
)

export default connect(
)(App)
