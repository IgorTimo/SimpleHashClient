import { useState } from "react";
import { TextArea, Button, Message, Input, Form } from "semantic-ui-react";
import Layout from "../components/Layout";

const PostHash = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
      setSuccessMessage("");
      setErrorMessage("");
      if(!title){
        setErrorMessage("Ну хоть какой-то заголовок то должен быть!");
        return;
      }
      if(!text){
        setErrorMessage("А описание? И чему вас только в школе учат!");
        return;

      }
  }


  return (
    <Layout>
      <Form onSubmit={handleSubmit} error={!!errorMessage}>
        <Form.Field
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          control={Input}
          label="Заголовок"
          placeholder="Ну его сюда"
        />
        <Form.Field
          value={text}
          onChange={(event) => setText(event.target.value)}
          control={TextArea}
          label="Текст для хэширования"
          placeholder="А это сюда, здесь и места побольше"
        />
        <Button primary>Захэшировать и сохранить</Button>
        <Message success header="Отлично!" content={successMessage} />
        <Message error header="Эх..." content={errorMessage} />
      </Form>
    </Layout>
  );
};

export default PostHash;
