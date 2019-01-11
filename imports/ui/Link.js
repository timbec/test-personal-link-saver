import React from "react";
import { Accounts } from "meteor/accounts-base";
import { Tracker } from "meteor/tracker";

import Links from "../api/links";
import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";

// class Link extends React.Component {
//   render() {
//     return (
//       <div>
//         <PrivateHeader title="Your Links From the Links" />
//         <LinksList />
//         <AddLink />
//       </div>
//     );
//   }
// }

//export default Link;

export default () => {
  return (
    <div>
      <PrivateHeader />
      <LinksList />
      <AddLink />
    </div>
  );
};
