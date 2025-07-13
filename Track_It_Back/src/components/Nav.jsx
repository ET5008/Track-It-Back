import { Link } from 'react-router-dom'


export default function Navigation() {
  return (
    <nav className="flex justify-around py-4">
      <span className="text-3xl">
        <Link to='/'>
        Track It Back
        </Link>
      </span>
      <ul>
        <li className='text-xl hover:cursor-pointer float-left mr-6'><Link to="/">Home</Link></li>
        <li className='text-xl hover:cursor-pointer float-left mr-6'><Link to="/demo">Demo</Link></li>
      </ul>
    </nav>
  );
}
