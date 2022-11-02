import { Button, Textarea } from "@mantine/core";
import { useState } from "react";

const InputDiv = () => {
  const [data, setData] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const requestAPI = async () => {
    setLoading(true);
    const res = await fetch("/api/gettext", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: data }),
    });
    const result = await res.json();
    setLoading(false);
    if (result.error) {
      setError("Something went wrong, try again later!");

      return;
    }
    setOutput(result.intent);
  };

  return (
    <div className=" flex flex-col gap-4 justify-center items-center p-3">
      <p className="text-3xl font-semibold tracking-tight">
        Get Text Summarised!
      </p>
      <Textarea
        placeholder="Write the text to be summarized"
        classNames={{ root: "w-[40vw]", description: "" }}
        minRows={6}
        onChange={(e) => {
          setData(e.target.value);
        }}
        value={data}
      />

      <Button
        variant="outline"
        onClick={requestAPI}
        loading={loading}
        className="hover:bg-blue-400 border-blue-400 hover:text-white"
      >
        Convert!
      </Button>
      <div className="">
        <p>
          <span className="text-gray-600">Result: </span>
          {output}
          {<p className="text-red-500">{error}</p>}
        </p>
      </div>
    </div>
  );
};

export default InputDiv;
