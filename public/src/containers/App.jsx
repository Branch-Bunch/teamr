import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import CardContainer from './CardsContainer'
import DetailedContainer from './DetailedContainer'

const App = () => (
  <Grid>
    <Row class="show-grid">
      <Col lg={8}>
        <CardContainer />
      </Col>
      <Col lg={3}>
        <DetailedContainer />
      </Col>
    </Row>
  </Grid>
)

export default connect(
null)(App)
