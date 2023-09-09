import SinglePoemCard from "./PoemCard";

function SinglePoem() {
  const poemCard = (
    <SinglePoemCard
      id={poem.id}
      title={poem.title}
      author={poem.author}
      poem={poem.poem}
    />
  );

  return <div>{poemCard}</div>;
}

export default SinglePoem;
