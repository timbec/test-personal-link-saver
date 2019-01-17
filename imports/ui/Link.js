import React from "react";
import { Accounts } from "meteor/accounts-base";
import { Tracker } from "meteor/tracker";

import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import LinksListFilter from "./LinksListFilter";

export default () => {
  return (
    <div className="page-content">
      <PrivateHeader title="Your Links" />
      <LinksListFilter />
      <AddLink />
      <LinksList />
    </div>
  );
};
