import { Content, Wrapper } from "./Bot.style";
import { useCallback, useEffect, useState } from "react";
//Components
import Button from "../Button";
const Bot = () => {
  const [successMsg, setSuccessMsg] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const runBot = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/runBot");
      const data = await response.json();
      if ((data.success = true)) {
        setSuccessMsg(data.message);
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  }, []);

  return (
    <Wrapper>
      <Content>
        <Button
          text={"Run Bot"}
          onClick={() => {
            runBot();
          }}
        />
        {!errorMsg && <h1>{successMsg}</h1>}
      </Content>
    </Wrapper>
  );
};

export default Bot;
