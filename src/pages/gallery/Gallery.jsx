import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpeg'

const Gallery = () => {
  const galleryLength = 15;
  const images =[]

  for(let i = 1; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpeg`))
  }

  // console.log(images);


  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, suscipit quis enim ipsam qui corporis.
      </Header>
      <section className='gallery'>
        <div className="container gallery__container">
          {
            images.map((images, index) => {
              return <article key={index}>
                <img src={images} alt="Gallery Image ${index + 1}" />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery