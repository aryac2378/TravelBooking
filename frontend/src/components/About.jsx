import { Link } from 'react-router-dom';
export default function About() {
    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("/images/bg_2.jpg")' }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                    <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                                    <span className="mr-2"><Link to="/">Home</Link></span> <span>About</span>
                                    </p>

                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section">
                <div className="container">
                <div className="row d-md-flex">
                 <div className="col-md-6 ftco-animate img about-image" style={{ backgroundImage: 'url(/images/about.jpg)' }}>
                    </div>
                    <div className="col-md-6 ftco-animate p-md-5">
                    <div className="row">
                        <div className="col-md-12 nav-link-wrap mb-5">
                        <div className="nav ftco-animate nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-whatwedo-tab" data-toggle="pill" href="#v-pills-whatwedo" role="tab" aria-controls="v-pills-whatwedo" aria-selected="true">What we do</a>
                            <a className="nav-link" id="v-pills-mission-tab" data-toggle="pill" href="#v-pills-mission" role="tab" aria-controls="v-pills-mission" aria-selected="false">Our mission</a>
                            <a className="nav-link" id="v-pills-goal-tab" data-toggle="pill" href="#v-pills-goal" role="tab" aria-controls="v-pills-goal" aria-selected="false">Our goal</a>
                        </div>
                        </div>
                        <div className="col-md-12 d-flex align-items-center">
                        <div className="tab-content ftco-animate" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-whatwedo" role="tabpanel" aria-labelledby="v-pills-whatwedo-tab">
                            <div>
                                <h2 className="mb-4">Offering Reliable Hosting</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-mission" role="tabpanel" aria-labelledby="v-pills-mission-tab">
                            <div>
                                <h2 className="mb-4">Exceptional Web Solutions</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-goal" role="tabpanel" aria-labelledby="v-pills-goal-tab">
                            <div>
                                <h2 className="mb-4">Help Our Customer</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-start mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate">
          <span className="subheading">FAQS</span>
          <h2 className="mb-4"><strong>Frequently</strong> Asked Questions</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 ftco-animate">
          <div id="accordion">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        When she reached the first hills? 
                        <span className="collapsed"><i className="icon-plus-circle" /></span>
                        <span className="expanded"><i className="icon-minus-circle" /></span>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rhetorical question ran over her cheek, then she continued her way.</p>
                    </div>
                  </div>
                </div>
                {/* Repeat for other cards */}
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Italic Mountains, she had a last
                        <span className="collapsed"><i className="icon-plus-circle" /></span>
                        <span className="expanded"><i className="icon-minus-circle" /></span>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rhetorical question ran over her cheek, then she continued her way.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}