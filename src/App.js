    // src/App.js

    import React, { Component } from 'react';
    import Images from './components/images';

    class App extends Component {
``

      state = {
        images: []
      }

      componentDidMount() {
        fetch('https://verizon.skylark.ostmodern.co.uk/api/images/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ images: data })
          console.log(data)
        })
        .catch(console.log)
      }

      render() {
        return (  
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Steve Jobs</h5>
              <h6 className="card-subtitle mb-2 text-muted">steve@apple.com</h6>
              <p className="card-text">Stay Hungry, Stay Foolish</p>
            </div>
            <Images images={this.state.images} />
          </div>
        );
      }
    }

    export default App;
