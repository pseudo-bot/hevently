import { useContext, useState } from "react";
import { UserContext } from "../../context/Users";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Drawer from './Drawer'
import EventsTable from './EventsTable'
import Divider from '@mui/material/Divider';
const UserData = ({ val, title, edit }) => {
  const [value, setValue] = useState(val);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="flex items-center justify-between">
      <div>{title}</div>
      <TextField
        id="outlined-basic"
        value={value}
        InputProps={{
          readOnly: edit ? false : true,
        }}
        variant={`${edit ? "outlined" : "standard"}`}
        size="small"
        className="w-72"
        onChange={handleChange}
      />
    </div>
  );
};

const Profile = () => {
  const user = useContext(UserContext);
  console.log(user);
  const { email, uid, displayName, photoURL } = user;
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [edit, setEdit] = useState(false);

 
  const handleDisabled = () => {
    setDisabledBtn(!disabledBtn);
    setEdit(!edit);
  };
 
  return (
    <>
      
        <Drawer/>
     
        <div className="bg-gray-200 profile-bg">
          <div className=" min-h-screen ">
            <div className="  p-6 mb-8" >
              <h3 className="text-3xl text-center font-semibold tracking-wider text-gray-600 pb-8">
                Profile
              </h3>
              <div>
                <div className="md:flex justify-around">
                  <div className="flex flex-col space-y-6 text-gray-600 text-md md:text-lg tracking-wider w-96 ">
                    <UserData val={email} title="Email" edit={edit} />
                    <UserData val="554516321" title="Mobile" edit={edit} />
                    <UserData val="14/21/2021" title="DOB" edit={edit} />
                  </div>
                  <div className="flex flex-col space-y-6 text-gray-600 text-md md:text-lg tracking-wider w-96 ">
                    <UserData val={email} title="Email" edit={edit} />
                    <UserData val="554516321" title="Mobile" edit={edit} />
                    <UserData val="14/21/2021" title="DOB" edit={edit} />
                  </div>
                </div>
                <div className="flex justify-center gap-4 pt-12 pb-4">
                  <Button
                    className="bg-blue-500 hover:bg-blue-700 capitalize text-md poppins"
                    variant="contained"
                    size="small"
                    onClick={handleDisabled}
                    disabled={disabledBtn ? false : true}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={handleDisabled}
                    variant="contained"
                    className="poppins capitalize text-md bg-blue-500 hover:bg-blue-700"
                    size="small"
                    disabled={disabledBtn ? true : false}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
            <Divider/>
            <h3 className="text-3xl text-center font-semibold tracking-wider text-gray-600 py-10">
               My Events
                </h3>
           <div className="pb-12 w-3/4 mx-auto" id="events"> <EventsTable/></div>
          </div>
        </div>
    
    </>
  );
};

export default Profile;
