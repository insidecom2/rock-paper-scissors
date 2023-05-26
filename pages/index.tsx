import { Container } from "@material-ui/core";
import Player from "@/components/player";
import { Header } from "@/components/commons/Header";
import Bot from "@/components/bot";
import Scores from "@/components/score";
import { selectUserState } from "@/stores/userSlice";
import { useSelector } from "react-redux";
import Register from "@/components/register";
import { useCreateUser } from "@/hooks/useCreateUser";

export default function Home() {
  const userState = useSelector(selectUserState);

  useCreateUser();

  if (userState.id === "") return <Register />;

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
