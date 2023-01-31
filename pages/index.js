import Layout from '../components/Layout'
import Link from 'next/link'
import { skills, experiences, projects } from '../profile'



const Index = () => (
    <Layout>

        {/** Header card */}
        <header className='row'>
            <div className='col-md-12'>
                <div className='card card-body bg-secondary text-white'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src='ryan-ray-profile2.jpeg' className='img-fluid'></img>
                        </div>
                        <div className='col-md-8'>
                            <h1>Rayn Ray</h1>
                            <h3>FullStack jr.</h3>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como p
                            </p>
                            <a href='/contratame'>Contratame</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** Segunda seccion */}
        <div className='row py-2'>
            <div className='col-md-4'>
                <div className='card bg-white'>
                    <div className='card-body'>
                        <h1>Skills</h1>

                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className='py-3' key={i}>
                                    <h5>{skill}</h5>
                                    <div className='progress'>
                                        <div
                                            className='progress-bar'
                                            role='progressbar'
                                            style={{ width: `${percentage}%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className='col-md-8'>
                <div className='card bg-white'>
                    <div className='card-body'>
                        <h1>Experiencia</h1>

                        <ul>
                            {
                                experiences.map(({ title, from, to, description }, index) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from}-{to}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Link href="/experiences" className='btn btn-primary'>
                            Know More
                        </Link>


                    </div>
                </div>
            </div>
        </div>


        { /** Portfolio */}
        <div className='row'>
            <div className='col-md-12'>
                <div className='card card-body bg-dark'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='text-center text-light'>Portfolio</h1>
                        </div>

                        {
                            projects.map(({ name, description, image }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${image}`} alt="" className='card-img-top' />
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href="#!">Know more</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-5">
                        <Link href="/portfolio" className="btn btn-light">
                            More project
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    </Layout>
)

export default Index;