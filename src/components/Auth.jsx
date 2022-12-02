import "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { singUp } = useAuth();
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async () => {
    console.log(email, password);
    await login(email, password);
    navigate("/pokemon");
  };
  return (
    <div className="w-full max-w-xs m-auto">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Form>
            <Form.Group className="bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button onClick={submit} variant="primary">
              Submit
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
