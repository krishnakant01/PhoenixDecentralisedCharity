import "./navigation.css"

export default function Navigation(){

    return(
        <div className="navigation">

            <header>
                <nav class="nav-container">
                <div class="mobile-nav-toggle" aria-controls="nav-link-list" aria-expanded="false">
                    <span class="sr-only">Menu</span>
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>

                <div class="nav-logo">
                    <a href="/">
                    <div class="nav-title">
                        <span class="bold-font blue-text">Phoenix</span>
                    </div>
                    </a>
                </div>

                <div class="nav-links">
                    <ul class="nav-link-list" id="nav-link-list" data-visible="false">
                    <a href="#">
                        <li class="nav-link-list-item">Browse Fundraisers</li>
                    </a>

                    <a href="#">
                        <li class="nav-link-list-item">Initiate Fundraise</li>
                    </a>

                    <a href="#">
                        <li class="nav-link-list-item">How It Works</li>
                    </a>
                    </ul>
                </div>

                <div class="search-bar">
                    <button class="btn btn-search" type="submit"><i class="material-icons">search</i></button>
                    <input type="text" placeholder="Search" id="search-input" class="search-input padding-075-1">
                    </input>
                </div>

                <div class="nav-social-links">
                    <ul>
                    <li class="social-link-list-items">
                        <button class="btn btn-text-secondary padding-05-1">Sign In</button>
                    </li>

                    </ul>
                </div>
                </nav>
            </header>
            

        </div>
    );



}