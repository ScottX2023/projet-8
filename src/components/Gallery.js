import datas from '../data.json'
import Card from '../components/Card'
import '../sass/modules/gallery.scss'

function Gallery (){
    return(
        <main className='home_gallery'>
        {datas.map(data => {
            return (
                <Card
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    cover={data.cover}
                />
            )
        })}
    </main>
    )
}

export default Gallery;