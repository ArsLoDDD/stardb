import React from "react";
import { withRouter } from "react-router-dom";
import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row";

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <>
      <Row
        left={<PersonList onItemSelected={(id) => history.push(id)} />}
        right={<PersonDetails itemId={id} />}
      />
      <Row left={<img src="./artur.jpg" />} right={<img src="./bog.jpg" />} />
      <h1>Иди нахуй со своим плутоном</h1>
    </>
  );
};

export default withRouter(PeoplePage);
