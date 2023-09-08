import Image from "next/image";
import styles from '@/app/style/common.module.css'

export default async function page({ params }) {

  const id = params.id;

  const apiCall = async () => {
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '76aac72082msh39616c36bef15f1p1b96ccjsn4d22fc94003a',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };
    let data = await fetch(url, options)
    data = await data.json()
    return data
  }

  const data = await apiCall()
  const main_data = data[0].details;
console.log(main_data);
  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
      <div className={styles.card_section}>
        <div>
          <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
        </div>
        <div>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  )
}
