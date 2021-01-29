import Head from 'next/head'
import Navigation from './navigation'

const Container = (props) => (
    <>
        <Head>
            <title>next-example</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css" />
        </Head>
        <Navigation />
        <div>
            {props.children}
        </div>
    </>
)

export default Container