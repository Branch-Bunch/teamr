import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import CardContainer from './CardsContainer'
import DetailedContainer from './DetailedContainer'
import CardList from '../components/CardList'

const App = () => (
  <Grid>
    <Row>
      <Col>
        // <CardContainer />
        <CardList />
      </Col>
      <Col>
        //<DetailedContainer />
        <h1> .... </h1>
      </Col>
    </Row>
  </Grid>
)

export default connect(
)(App)
