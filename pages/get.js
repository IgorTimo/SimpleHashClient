import { useState } from "react";
import { Container } from "semantic-ui-react";
import { Form, Input, Button, Message } from "semantic-ui-react";
import Layout from "../components/Layout";
import getDocumentByHash from "../utils/requestHash/getDocumentByHash";

const GetByHash = (props) => {
  const [hash, setHash] = useState(props.hash || "");
  const [document, setDocument] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    if (!hash) {
      setErrorMessage("По пустому особо не загрузишь :(");
      return;
    }

    try {
      const response = await getDocumentByHash(hash);
      setDocument(response);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
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
        <Message error header="Эх..." content={errorMessage} />
      </Form>
      <Container>
        <h1>{document.title}</h1>
        <h3>{document.text}</h3>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const hash = context.query.hash || "";

  return {
    props: { hash },
  };
}

export default GetByHash;
