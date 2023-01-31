import Navbar from './Navbar'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import nProgress from 'nprogress'
import classNames from 'classnames'

const Layout = ({ children, title, footer = true, dark = false }) => {

    const router = useRouter();

    useEffect(() => {
    
    const handleRouterChange = url => {
        console.log(url)
        nProgress.start();
    }
    
       router.events.on('routerChangeStart', handleRouterChange)

       router.events.on('routeChangeComplete', () => nProgress.done());

       return () => {
        router.events.off('routerChangeStart', handleRouterChange)
       }
    }, [])
    
    return (
        <div className={classNames({'bg-dark': dark, 'bg-white':!dark})}>
        <Navbar />

        <main className="container py-4">
        
        {title && (
            <h1 className={classNames('text-center',{'text-white': dark})}>
                {title}
            </h1>
        )}


            {children}
        </main>

        {
            footer && (
                <footer className='bg-dark text-white text-center'>
            <div className='container p-4'>
                <h1>&copy; Facundo Kozlowski Portfolio</h1>
                <p>2020- {new Date().getUTCFullYear()}</p>
                <p>Todos los derechos reservados.</p>
            </div>
        </footer>
            )
        }
    </div>
    )
}

export default Layout;