export default async function handler(req, res) {
  try {
    const result = await fetch(
      `https://api.nlpcloud.io/v1/gpu/fast-gpt-j/intent-classification`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token 9c3f17a6c71cd41801c7f033ddba9d39204e3b75",
        },
        body: JSON.stringify(req.body),
      }
    );
    const data = await result.json();
    console.log(data);

    res.status(400).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
}
