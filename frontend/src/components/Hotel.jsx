export default function Hotel() {
    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("images/bg_5.jpg")' }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="Home.jsx">Home</a></span> <span>Hotel</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Hotels</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section ftco-degree-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 sidebar">
                            <div className="sidebar-wrap bg-light ftco-animate">
                                <h3 className="heading mb-4">Find City</h3>
                                <form action="#">
                                    <div className="fields">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Destination, City" />
                                        </div>
                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                <select name='' id='search' className="form-control" placeholder="Keyword search">
                                                    <option value>Select Location</option>
                                                    <option value>San Francisco USA</option>
                                                    <option value>Berlin Germany</option>
                                                    <option value>Lodon United Kingdom</option>
                                                    <option value>Paris Italy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="checkin_date" className="form-control" placeholder="Date from" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="checkin_date" className="form-control" placeholder="Date to" />
                                        </div>
                                        <div className="form-group">
                                            <div className="range-slider">
                                                <span>
                                                    <input type="number" defaultValue={25000} min={0} max={120000} />	-
                                                    <input type="number" defaultValue={50000} min={0} max={120000} />
                                                </span>
                                                <input defaultValue={1000} min={0} max={120000} step={500} type="range" />
                                                <input defaultValue={50000} min={0} max={120000} step={500} type="range" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" defaultValue="Search" className="btn btn-primary py-3 px-5" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar-wrap bg-light ftco-animate">
                                <h3 className="heading mb-4">Star Rating</h3>
                                <form method="post" action="#" className="star-rating">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <a href="HotelSingle.jsx" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-1.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><a href="HotelSingle.jsx">Hotel, Italy</a></h3>
                                                    <p className="rate">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-o" />
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">$40<br /><small>/night</small></span>
                                                </div>
                                            </div>
                                            <p>Far far away, behind the word mountains, far from the countries</p>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span><i className="icon-map-o" /> Miami, Fl</span>
                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <a href="HotelSingle.jsx" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-2.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><a href="HotelSingle.jsx">Hotel, Italy</a></h3>
                                                    <p className="rate">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-o" />
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">$40<br /><small>/night</small></span>
                                                </div>
                                            </div>
                                            <p>Far far away, behind the word mountains, far from the countries</p>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span><i className="icon-map-o" /> Miami, Fl</span>
                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <a href="HotelSingle.jsx" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-3.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><a href="HotelSingle.jsx">Hotel, Italy</a></h3>
                                                    <p className="rate">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-o" />
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">$40<br /><small>/night</small></span>
                                                </div>
                                            </div>
                                            <p>Far far away, behind the word mountains, far from the countries</p>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span><i className="icon-map-o" /> Miami, Fl</span>
                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <a href="HotelSingle.jsx" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-4.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><a href="HotelSingle.jsx">Hotel, Italy</a></h3>
                                                    <p className="rate">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-o" />
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">$40<br /><small>/night</small></span>
                                                </div>
                                            </div>
                                            <p>Far far away, behind the word mountains, far from the countries</p>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span><i className="icon-map-o" /> Miami, Fl</span>
                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <a href="HotelSingle.jsx" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-5.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><a href="HotelSingle.jsx">Hotel, Italy</a></h3>
                                                    <p className="rate">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-o" />
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">$40<br /><small>/night</small></span>
                                                </div>
                                            </div>
                                            <p>Far far away, behind the word mountains, far from the countries</p>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span><i className="icon-map-o" /> Miami, Fl</span>
                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <a href="HotelSingle.jsx" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-6.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><a href="HotelSingle.jsx">Hotel, Italy</a></h3>
                                                    <p className="rate">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-o" />
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="price per-price">$40<br /><small>/night</small></span>
                                                </div>
                                            </div>
                                            <p>Far far away, behind the word mountains, far from the countries</p>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span><i className="icon-map-o" /> Miami, Fl</span>
                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> {/* .col-md-8 */}
                    </div>
                </div>
            </section> {/* .section */}
        </div>

    )
}