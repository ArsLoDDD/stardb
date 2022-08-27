import React from "react";
import { withRouter } from "react-router-dom";
import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row";

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <div>
      <Row
        left={<PersonList onItemSelected={(id) => history.push(id)} />}
        right={<PersonDetails itemId={id} />}
      />
      <Row
        left={
          <img src="https://i.ibb.co/SNC0TxR/photo-5210967246690696845-y.jpg" />
        }
        right={
          <img src="https://i.ibb.co/5Ln5zkD/photo-5210967246690696844-y.jpg" />
        }
      />
      <h1>Иди нахуй со своим плутоном</h1>
    </div>
  );
};

export default withRouter(PeoplePage);
