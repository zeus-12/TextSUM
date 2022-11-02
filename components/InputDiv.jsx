import { Textarea } from "@mantine/core";
import { useState } from "react";

const InputDiv = () => {
  const [data, setData] = useState("");
  const [output, setOutput] = useState("");

  const requestAPI = async () => {
    const res = await fetch("/api/gettext", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: data }),
    });
    const result = await res.json();
    if (result.error) {
      return;
    }
    setOutput(result.intent);
  };

  return (
    <div className=" flex flex-col gap-4 justify-center items-center p-3">
      <Textarea
        placeholder="Write the text to be summarized"
        classNames={{ root: "w-[40vw]", description: "" }}
        onChange={(e) => {
          setData(e.target.value);
        }}
        value={data}
      />

      <button onClick={requestAPI} className="b">
        Click
      </button>
      <div className="border border-red-500 w-24">
        <p>{output}</p>
      </div>
    </div>
  );
};

export default InputDiv;
