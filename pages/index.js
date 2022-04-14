import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";

const Index = () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>
        На этом сайте вы можете захэшировать текст с заголовком, а потом
        получить его обратно по хэшу из базы данных. Давайте приступим. Что вы
        хотите сделать?
      </h1>
      <Button primary onClick={() => router.push("/post")}>Захэшировать</Button>
      <Button primary onClick={() => router.push("/get")}>Загрузить по хэшу</Button>
    </Layout>
  );
};

export default Index;
