import { useEffect, useRef, useState } from "react";
let $ = window.$;

export default function Terminal({ review, loading }) {
  const ref = useRef();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let $ = window.$;
    var $carousel = $(ref.current).flickity({
      contain: true,
      wrapAround: false,
      freeScroll: false,
      cellAlign: "center",
      lazyLoad: 2,
      imagesLoaded: true,
      prevNextButtons: false,
      on: {
        ready: function () {
          let dotsSlideTes = $(".section-testimonial .flickity-page-dots");
          let dotsNew = $(".section-testimonial .dots");
          dotsSlideTes.appendTo(dotsNew);
        },
        change: function (index) {
          setCurrent(index);
        },
      },
    });
    var flkty = $carousel.data("flickity");
    var $imgs = $(".section-testimonial .carousel-cell picture img");
    $carousel.on("scroll.flickity", function (event, progress) {
      flkty.slides.forEach(function (slide, i) {
        var img = $imgs[i];
        var x = ((slide.target + flkty.x) * -1) / 2;
        img.style.transform = "translateX( " + x + "px)";
      });
    });
    let ctrPrevTes = $(".section-testimonial .btn_ctr.prev"),
      ctrNextTes = $(".section-testimonial .btn_ctr.next");
    ctrPrevTes.on("click", function () {
      $carousel.flickity("previous", true);
    });
    ctrNextTes.on("click", function () {
      $carousel.flickity("next", true);
    });
  }, []);

  if (loading) return "Loading...";
  return (
    <section className="section-testimonial">
      <div className="container">
        <div className="textbox">
          <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
        </div>
        <div className="testimonial">
          <div className="testimonial-item">
            <div className="item">
              <div className="text">
                {review?.map((e, i) => (
                  <div
                    className={`ct ct-1 ${current === i ? "active" : ""}`}
                    key={i}
                  >
                    <div className="info">
                      <div className="name">
                        <h4>{e.name}</h4>
                        <p>Thành viên CFD1</p>
                      </div>
                      <div className="quotes">
                        <img src="/img/quotes.svg" alt="" />
                      </div>
                    </div>
                    <div className="content">{review[i].content}</div>
                    <div className="bottom">
                      <a href="#" target="_blank">
                        <img src="img/facebook.svg" alt="" />
                      </a>
                      <span>{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="images">
                <div className="list" ref={ref}>
                  {review?.map((e, i) => (
                    <div className="carousel-cell active">
                      <div key={i} className="img ">
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet="img/Intersect.png"
                          />
                          <img data-flickity-lazyload={e.cover} alt="" />
                        </picture>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="dots" />
            <div className="btn_ctr prev" />
            <div className="btn_ctr next" />
          </div>
        </div>
      </div>
    </section>
  );
}
