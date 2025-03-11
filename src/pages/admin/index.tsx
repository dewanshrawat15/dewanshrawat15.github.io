import { useEffect } from "react";
import { useSignIn } from "../../utils/hooks";
import { useNavigate } from "react-router";

export default function AdminPage() {
  const { user } = useSignIn();
  const navigateTo = useNavigate();

  useEffect(() => {
    console.info("User is", user);
    if (user === undefined) {
      navigateTo("/sign-in");
    }
  }, [user]);

  return <></>;
}
