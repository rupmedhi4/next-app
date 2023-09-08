import MovieCard from "../components/MovieCard";
import style from '@/app/style/common.module.css'

export default async function page() {

  const apiCall = async () => {

    const url = process.env.API_KEY

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
  const main_data = data.titles;

  return (
    <>
    <section className={style.movieSection}>
        <div className={style.container}>
    <h1>SERIES & MOVIE</h1>
    <div className={style.card_section}>

        {
          main_data.map((currEl)=>(
            <MovieCard key={currEl.id} {...currEl}/>
           ))
        }
        </div>

    </div>
    </section>
    
    </>
    
  )
}
