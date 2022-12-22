import { ButtonComponent } from "./Button.component";
import { TextField } from "@mui/material";
import styled from "styled-components";
import { Link } from "@nextui-org/react";
export const MobileDesktopTextComponent = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <Parent>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <TextField
          fullWidth
          className="text_name_area"
          type="text"
          onChange={handleChange}
          label="Username"
          // value={username}
          name="username"
          placeholder="anthony@gmail.com"
        />

        <TextField
          fullWidth
          className="text_password_area"
          type="text"
          onChange={handleChange}
          // value={password}
          name="username"
          label="Password"
          placeholder="my password"
        />
        <ButtonComponent showIcon={false}>Log in</ButtonComponent>
        <div className="no_account">
          <p>Forgot Password?</p>
          <p>
            Don&apos;t have an account?
            <Link href="/register" className="link">
              <span>Sign Up </span>
            </Link>
          </p>
        </div>
      </form>
    </Parent>
  );
};
const Parent = styled.div`
  @media screen and (min-width: 501px) {
    display: grid;
    width: 50%;
    margin: 0 auto;
    height: 100vh;
    place-items: center;
  }
  .text_name_area {
    margin: 2rem 0;
  }
  button {
    display: grid;
    width: 100%;
    margin-top: 2rem;
    border-radius: 3rem;
    p {
    }
  }
  .no_account {
    font-weight: 500;
    p:nth-child(1) {
      text-align: right;
      margin-top: 8px;
    }
    p:nth-child(2) {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 1.3rem;
      .link {
        span {
          color: var(--main-blue);
        }
        display: inline-block;
        margin-left:5px;
      }
    }
  }
`;
