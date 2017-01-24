import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import CardContainer from './CardsContainer'
import DetailedContainer from './DetailedContainer'
import ViewSelector from '../components/Tabs'

const sampleTitle = 'sampleTitle'
function sampleFunction() {
  console.log('sample functuon')
}

const App = () => (
  <Grid>
    <Row>
      <Col lg={8}>
        <ViewSelector />
      </Col>
    </Row>
    <Row>
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
