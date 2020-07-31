import React from "react";

function Banner() {
    return <div>
        <div className="row top_section">
            <div className="col-md-12 column bannerContainer">
                <div className="skyline-img-background"></div>
                <div className="skyline-img-foreground"></div>
                <div className="banner">
                    {/*<img className="bannerLogo center-block hidden-xs"*/}
                    {/*     src="/assets/images/logo.svg"/>*/}
                    <div className="bannerText">
                        <div className="bannerTextHeadline">resource super collect 🐕</div>
                        <p>This here ! Yan can get what you want .</p>
                        <p>open source</p>
                    </div>
                </div>
                <div className="row btn-group btn-group-lg bannerButtons">
                    <div className="col-sm-6">
                        <a href="#download-links">
                            <button type="button" className="btn">download</button>
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a href="/document">
                            <button type="button" className="btn">document</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default Banner;
