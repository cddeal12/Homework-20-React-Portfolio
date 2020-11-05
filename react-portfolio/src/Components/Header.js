import './App.css';

function Header() {
  return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="navbar-header">

                    <p className='navbar-brand text-white'>Caleb Deal</p>

                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
  );
}

export default Header;
