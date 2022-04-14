import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { List } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import getAllHashes from "../utils/requestHash/getAllHashes";

const Index = () => {
  const [list, setList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getAllHashes().then(setList).catch(console.error);
  }, []);

  const renderList = () => {
    return list.map((doc, index) => (
      <List.Item key={index}>
        <List.Icon name="file text" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header
            as="a"
            onClick={() =>
              router.push({ pathname: "/get", query: { hash: doc.hash } })
            }
          >
            {doc.title}
          </List.Header>
          <List.Description as="a">{doc.hash}</List.Description>
        </List.Content>
      </List.Item>
    ));
  };

  return (
    <Layout>
      <h1>
        На этом сайте вы можете захэшировать текст с заголовком, а потом
        получить его обратно по хэшу из базы данных. Давайте приступим. Что вы
        хотите сделать?
      </h1>
      <Button primary onClick={() => router.push("/post")}>
        Захэшировать
      </Button>
      <Button primary onClick={() => router.push("/get")}>
        Загрузить по хэшу
      </Button>

      <List divided relaxed>
        {list && renderList()}
      </List>
    </Layout>
  );
};

export default Index;
