import { useEffect } from "react";
import { useSignIn } from "../../utils/hooks";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const adminActionItems: { title: string; path: string }[] = [
  {
    title: "Blog",
    path: "/admin/blog",
  },
  {
    title: "Working Experience",
    path: "/admin/working-experience",
  },
  {
    title: "Projects",
    path: "/admin/projects",
  },
  {
    title: "Social Media URLs",
    path: "/admin/social-media-urls",
  },
];

const AdminActionItem = ({
  item,
}: {
  item: { title: string; path: string };
}) => {
  return (
    <div
      onClick={() => {
        window.location.href = item.path;
      }}
      className="flex cursor-pointer justify-between items-center border-b py-3 border-b-black"
    >
      <h6 className="font-poppins font-semibold text-md sm:text-lg">
        {item.title}
      </h6>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

export default function AdminPage() {
  const { user } = useSignIn();
  const navigateTo = useNavigate();

  useEffect(() => {
    console.info("User is", user);
    if (user === undefined) {
      navigateTo("/sign-in");
    }
  }, [user]);

  return (
    <div className="flex flex-col pt-6 px-6 sm:pt-12 sm:px-12">
      <h2 className="font-poppins text-lg sm:text-3xl font-bold">Admin</h2>
      <br />
      <div className="w-full p-4 bg-gray-100 rounded-md border-2 border-gray-200">
        {adminActionItems.map((item, index) => (
          <AdminActionItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
