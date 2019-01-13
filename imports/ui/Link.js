import React from "react";
import { Accounts } from "meteor/accounts-base";
import { Tracker } from "meteor/tracker";

import Links from "../api/links";
import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import LinksListFilter from "./LinksListFilter";

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <LinksListFilter />
      <LinksList />
      <AddLink />
    </div>
  );
};
