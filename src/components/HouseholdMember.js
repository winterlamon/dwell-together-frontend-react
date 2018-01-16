import React from 'react';
import { Button, Card, Col, Row} from 'react-materialize';


class HouseholdMember extends React.Component {

  handleClick = (event) => {
    event.preventDefault()
  }

    render() {

      const member = this.props.member

      return (
        <div className="dashboard">
          <Row>
            <Card
              className="card"
              title={member.first_name + member.last_name}
              actions={[<Button
                            key={"venue-button-" + member.id}
                            onClick={this.handleClick}>
                            Remove
                          </Button>
                      ]}>
                    </Card>
          </Row>

        </div>
      )
    }
}


export default HouseholdMember;
