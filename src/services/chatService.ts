export async function streamMockResponse(
  input: string,
  onChunk: (chunk: string) => void,
) {
  const fakeResponse =
    "This is a simulated AI response to demonstrate streaming behavior.";

  const words = fakeResponse.split(" ");

  for (let i = 0; i < words.length; i++) {
    await new Promise((res) => setTimeout(res, 80));
    onChunk(words.slice(0, i + 1).join(" "));
  }
}
