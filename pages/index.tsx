import { Container } from "@material-ui/core";
import Player from "@/components/player";
import { Header } from "@/components/commons/Header";
import Bot from "@/components/bot";
import Scores from "@/components/score";
import { useCreateUser } from "@/hooks/useCreateUser";
import { useEffect } from "react";
import { selectUserState } from "@/stores/userSlice";
import { useSelector } from "react-redux";
import { Loading } from "@/components/commons/Loading";

export default function Home() {
  const { createUser } = useCreateUser();
  const userState = useSelector(selectUserState);

  useEffect(() => {
    if (userState.id === "") createUser();
  }, []);

  if (userState.id === "") return <Loading />;
  return (
    <>
      <Header title="Rock Paper Scissors" metaContent="Rock Paper Scissors" />
      <Container maxWidth="lg">
        <Scores />
        <Bot />
        <Player />
      </Container>
    </>
  );
}
