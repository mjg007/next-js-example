import Link from 'next/link'

const Navigation = () => (
    <ul>
        <li>
            <Link href="/one">
                <a>What is Lorem Ipsum?</a>
            </Link>
        </li>
        <li>
            <Link href="/two">
                <a>Why do we use it?</a>
            </Link>
        </li>
        <li>
            <Link href="/three">
                <a>Where does it come from?</a>
            </Link>
        </li>
    </ul>
)

export default Navigation