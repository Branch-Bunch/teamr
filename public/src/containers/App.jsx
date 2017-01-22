import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import CardContainer from './CardsContainer'
import DetailedContainer from './DetailedContainer'

const App = () => (
    <div>
  <Grid>
    <Row>
      <Col md={7}>
        <CardContainer />
      </Col>
      <Col md={5}>
        <DetailedContainer />
      </Col>
    </Row>
  </Grid>
  </div>
)

export default connect(
null)(App)
