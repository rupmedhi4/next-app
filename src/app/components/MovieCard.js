import Image from "next/image";
import Link from "next/link";
import styles from '@/app/style/common.module.css'

export default function MovieCard(currEl) {

    const {id, type, title, synopsis} = currEl.jawSummary;

  return (
    <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={currEl.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
                </div>
                <div className={styles.card_data}>
                    <h2>{title.substring(0,18)}</h2>
                    <p>
                        {`${synopsis.substring(0,66)} ...`}
                    </p>

                    <Link href={`/movie/${id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

        </>
  )
}
