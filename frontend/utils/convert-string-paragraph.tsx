export default function ConvertStringToParagraph(string: string) {
  const stringArray = string.split("\n");
  return stringArray.map((content, index) => {
    return <p key={index}>{content}</p>;
  });
}
