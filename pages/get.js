import { useState } from "react";
import { Form, Input, Button, Message } from "semantic-ui-react";
import Layout from "../components/Layout";

const GetByHash = (props) => {
  const [hash, setHash] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    if(!hash){
      setErrorMessage("По пустому особо не загрузишь :(");
      return;
    }
    
}
  return (
    <Layout>
      <Form onSubmit={handleSubmit} error={!!errorMessage}>
        <Form.Field
          value={hash}
          control={Input}
          onChange={(event) => setHash(event.target.value)}
          label="Хэш"
          placeholder="Ну его сюда"
        />
        <Form.Field>
          <Button primary type="submit">
            Загрузить
          </Button>
        </Form.Field>
        <Message success header="Отлично!" content={successMessage} />
        <Message error header="Эх..." content={errorMessage} />
      </Form>
    </Layout>
  );
};

export default GetByHash;
