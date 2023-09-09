import { getPoemById } from "../ApiCalls";
import SinglePoemCard from "./PoemCard";

function SinglePoem() {
  const [selectedPoem, setSelectedPoem] = useState('')

  useEffect(() => {
    getPoemById(1)
    .then((data) => {
        setSelectedPoem(data.poem)
        console.log("data", data)
          })
          .catch((error) => {
            console.log('Error getting poem by id', error)
          })
       }, [])
      
  const poemCard = (
    <SinglePoemCard
      id={selectedPoem.id}
      title={selectedPoem.title}
      author={selectedPoem.author}
      poem={selectedPoem.poem}
    />
  );

  return <div>{poemCard}</div>;
  }

export default SinglePoem;


// add get fetch request to get the poems by id (api file)

