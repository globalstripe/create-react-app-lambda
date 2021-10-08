    // src/components/images.js

    import React from 'react'

    const Images = ({ images }) => {
      return (
        <div>
          <center><h1>Image List</h1></center>
          {images.map((image) => (

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{image.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{image.url}</h6>
                <p class="card-text">{images.description}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Images