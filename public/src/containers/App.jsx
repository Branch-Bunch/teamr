import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import CardContainer from './CardsContainer'
import DetailedContainer from './DetailedContainer'

const App = () => (
  <Grid>
    <Row>
      <Col md={6}>
        <CardContainer />
      </Col>
      <Col md={6}>
        <DetailedContainer />
      </Col>
    </Row>
  </Grid>
)

export default connect(
null)(App)
