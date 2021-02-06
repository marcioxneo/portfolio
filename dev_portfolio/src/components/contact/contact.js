import React from 'react'
import { Row, Col, Card } from 'react-materialize'
import Button from 'react-materialize/lib/Button'
import UserProfile from '../user_profile/user_profile'

function Contact() {
  return (
    <Row>
      <Col m={3} s={12}>
        <UserProfile />
      </Col>
      <Col m={8} s={12}>
        <h5>Contact</h5>
        <Card>
          <Row>
            <input placeholder='lorem@ipsum.com' type='email' label='Email' s={12} />
            <input placeholder='Lorem Ipsum..' label='Message' s={12} />
            <Col s={12} m={12}>
              <Button waves="light" className='light grey darken-2'>SEND</Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default Contact