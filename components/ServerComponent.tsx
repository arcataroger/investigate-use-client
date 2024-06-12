import React from "react";
import useSomethingServerside from "@/hooks/useSomethingServerside";
import ClientComponent from "@/components/ClientComponent";

type Props = {};

export default function ServerComponent({}: Props) {

  const serversideSomething = useSomethingServerside()

  return <div>
    <h1>Serverside hook:</h1>
    {serversideSomething}

    <br/>
    <br/>
    <br/>

    <h1>Clientside hook (must be in a child client component)</h1>
    <ClientComponent/>

  </div>;
}
