import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import CardContainer from './CardsContainer'
import DetailedContainer from './DetailedContainer'
import Card from '../components/Card'

const App = () => (
    <div>
  <Grid>
    <Row>
      <Col>
        // <CardContainer />
        // <Card />
        <h1>asdsad</h1>
      </Col>
      <Col>
        // <DetailedContainer />
        <h1> asdsadasd </h1>
      </Col>
    </Row>
  </Grid>
  </div>
)

export default connect(
null)(App)
