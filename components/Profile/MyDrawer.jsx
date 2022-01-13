import { useState, useEffect } from "react";
import {
  Person,
  Event,
  Logout,
  HowToReg,
  PendingActions,
  Home,
} from "@mui/icons-material/";
import Image from "next/image";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import logOut from "../../config/firebase/signOut";
import { useRouter } from "next/router";
import Link from "next/link";
import useBadge from "../../hooks/useBadge";
import { mutate } from "swr";

const SidebarOption = ({
  title,
  icon,
  divider = true,
  register = false,
  setRegister,
  bookmark = "",
  badge = false,
  handleBadge,
  isLogout = false,
}) => {
  return (
    <>
      <Link href={`#${bookmark}`} passHref>
        <div
          onClick={() => {
            if (badge) {
              handleBadge();
            }
          }}
          className="cursor-pointer flex py-4 px-6 gap-4 items-center  hover:text-blue-700 transition-all duration-200 m-2"
        >
          <div>
            {icon} <span>{title}</span>
          </div>
          {badge && (
            <div className="h-3 w-3 relative">
              <div className="absolute w-full h-full inset-0 bg-red-500 opacity-75 animate-ping rounded-full"></div>
              <div className="h-3 w-3 relative rounded-full bg-red-500"></div>
            </div>
          )}
        </div>
      </Link>
      <div className="w-4/5 mx-auto">
        {divider && <Divider variant="middle" />}
      </div>
    </>
  );
};

const SidebarHeading = ({ title }) => {
  return (
    <div className="py-6">
      <Divider variant="middle">
        <div className="text-gray-500 capitalize">{title}</div>
      </Divider>
    </div>
  );
};

const MyDrawer = ({ photoURL, displayName, host = false }) => {
  const router = useRouter();
  const { data, uid } = useBadge();
  const [approval, setApproval] = useState(false);
  const [request, setRequest] = useState(false);

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setApproval(data.approval);
      setRequest(data.request);
    }
  }, [data]);

  const signOut = async () => {
    await logOut();
    router.push("/");
  };

  const fetchBadge = async (approval, request) => {
    await mutate(
      `/api/user/${uid}/badge`,
      { ...data, approval, request },
      false
    );
    await fetch(`/api/user/${uid}/badge`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        approval,
        request,
      }),
    });
    await mutate(`/api/user/${uid}/badge`);
  };

  const handleApprove = async () => {
    if (uid) {
      setApproval(false);
      fetchBadge(false, request);
    }
  };

  const handleRequest = async () => {
    if (uid) {
      setRequest(false);
      fetchBadge(approval, false);
    }
  };

  return (
    <>
      <div className="absolute z-50 w-[16rem] bg-[white] h-full">
        <div className="pt-8 pb-4">
          <div className="w-full flex justify-center">
            <Image
              src={photoURL || "/profile/user.png"}
              alt="Profile picture"
              className="rounded-full"
              width={64}
              height={64}
            />
          </div>
          <div className="text-center py-2 capitalize">
            {displayName === "" ? "User" : displayName}
          </div>
        </div>
        <nav>
          {host ? (
            <>
              <SidebarHeading title="registration" />
              <SidebarOption title="Home" icon={<Home />} />
              <SidebarOption title="Profile" icon={<Person />} />
              <SidebarOption title="Register" icon={<HowToReg />} />

              <SidebarOption
                title="Registrations"
                icon={<Event />}
                bookmark="registrations"
              />
              <SidebarOption
                title="Requests"
                icon={<PendingActions />}
                divider={false}
                bookmark="requests"
                badge={request}
                handleBadge={handleRequest}
              />
            </>
          ) : (
            <>
              <SidebarHeading title="profile" />
              <SidebarOption title="Home" icon={<Home />} />
              <SidebarOption title="Profile" icon={<Person />} />
              <SidebarOption
                title="Events"
                icon={<Event />}
                bookmark="events"
              />
              <SidebarOption
                title="Approval"
                icon={<PendingActions />}
                bookmark="requests"
                divider={false}
                badge={approval}
                handleBadge={handleApprove}
              />
            </>
          )}

          <div className="px-8 py-4">
            <Button variant="contained" color="error" onClick={signOut}>
              <Logout /> <span>Logout</span>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MyDrawer;
