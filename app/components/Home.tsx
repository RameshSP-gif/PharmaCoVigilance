// pages/index.js
export default function Home() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">Welcome to Next.js with Bootstrap</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">This is a simple card example using Bootstrap in Next.js.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">Another card example with a simple description.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">Here is a third card to complete the row.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  