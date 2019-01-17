import React from "react";
import { Accounts } from "meteor/accounts-base";
import PropTypes from "prop-types";

const PrivateHeader = props => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <button className="button--link-text" onClick={() => Accounts.logout()}>
          Logout
        </button>
      </div>
    </header>
  );
};

//must now import PropTypes
PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;
