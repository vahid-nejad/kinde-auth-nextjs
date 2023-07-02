import { LoginLink, LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React, { use } from "react";

interface Props {
  className?: string;
}
const SigninButton = (props: Props) => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = getUser();
  if (isAuthenticated())
    return (
      <div className={"flex gap-2 " + props.className}>
        <p>{user.given_name}</p>
        <LogoutLink className={"hover:text-sky-200 transition-colors "}>Sign out</LogoutLink>
      </div>
    );
  return (
    <LoginLink className={"hover:text-sky-200 transition-colors  " + props.className}>
      Sign In
    </LoginLink>
  );
};

export default SigninButton;
