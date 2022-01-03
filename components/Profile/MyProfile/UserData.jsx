import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "blue",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "blue",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#444",
      },
      "&:hover fieldset": {
        borderColor: "#444",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0384fc",
      },
    },
  });
  
  const UserData = ({ icon, title, edit, handleChange, value }) => {
    return (
      <div className="flex items-center justify-between">
        <div className="text-gray-800 font-semibold tracking-wider  ">
          {" "}
          <span className="mr-1">{icon}</span> {title}
        </div>
        <CssTextField
          id="outlined-basic"
          value={value}
          InputProps={{
            readOnly: edit ? false : true,
            autoComplete: "off",
          }}
          variant="outlined"
          className="w-72 bg-bgray-50"
          onChange={(e) => handleChange(e.target.value)}
          focused={edit}
          size="small"
          type="email"
        />
      </div>
    );
  };


export default UserData;